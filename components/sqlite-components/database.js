import * as SQLite from 'expo-sqlite';
import { SECTION_LIST_MOCK_DATA } from './utils';

const db = SQLite.openDatabaseSync('littleLemon');

export async function createTable() {
            await db.execAsync(
                'create table if not exists menuitems (id integer primary key not null, uuid text, title text, price text, category text);'
            );
}
            

export async function getMenuItems() {
    const menuItems = await db.getAllAsync('select * from menuitems'); // getFirstAsync getEachAsync
    return menuItems;
}

export function saveMenuItems(menuItems) {
      // 2. Implement a single SQL statement to save all menu data in a table called menuitems.
    // Check the createTable() function above to see all the different columns the table has
    // Hint: You need a SQL statement to insert multiple rows at once.

    try {
      db.execAsync( // runAsync
        'insert into menuitems (uuid, title, price, category) values ' +
          menuItems.map((item) => `('${item.id}', '${item.title}', '${item.price}', '${item.category}')`).join(',')
      );
    } catch (error) {
        console.error(error);
        }
}

/**
 * 4. Implement a transaction that executes a SQL statement to filter the menu by 2 criteria:
 * a query string and a list of categories.
 *
 * The query string should be matched against the menu item titles to see if it's a substring.
 * For example, if there are 4 items in the database with titles: 'pizza, 'pasta', 'french fries' and 'salad'
 * the query 'a' should return 'pizza' 'pasta' and 'salad', but not 'french fries'
 * since the latter does not contain any 'a' substring anywhere in the sequence of characters.
 *
 * The activeCategories parameter represents an array of selected 'categories' from the filter component
 * All results should belong to an active category to be retrieved.
 * For instance, if 'pizza' and 'pasta' belong to the 'Main Dishes' category and 'french fries' and 'salad' to the 'Sides' category,
 * a value of ['Main Dishes'] for active categories should return  only'pizza' and 'pasta'
 *
 * Finally, the SQL statement must support filtering by both criteria at the same time.
 * That means if the query is 'a' and the active category 'Main Dishes', the SQL statement should return only 'pizza' and 'pasta'
 * 'french fries' is excluded because it's part of a different category and 'salad' is excluded due to the same reason,
 * even though the query 'a' it's a substring of 'salad', so the combination of the two filters should be linked with the AND keyword
 *
 */
export async function filterByQueryAndCategories(query, activeCategories) {
    let sql = 'select * from menuitems where title like ?';
    let params = [`%${query}%`];
    if (activeCategories.length) {
        sql += ' and category in (' + activeCategories.map(() => '?').join(',') + ')';
        params = params.concat(activeCategories);
    }
    const menuItems = await db.getAllAsync(sql, params);
    return menuItems;
}
