import { Selector } from "testcafe";

fixture("UI Test 1")
    .page("http://localhost:5173/");

    test("Clear Completed Todos", async t => {
        const toggleBtn1 = Selector('.toggle-btn').nth(0);
        const toggleBtn2 = Selector('.toggle-btn').nth(1);
        const toggleBtn3 = Selector('.toggle-btn').nth(2);
    
        await t
            .typeText('#todo-input', 'Todo 1')
            .click('#add-button')
            .typeText('#todo-input', 'Todo 2')
            .click('#add-button')
            .typeText('#todo-input', 'Todo 3')
            .click('#add-button')
    
            .click(toggleBtn1)
            .click(toggleBtn2)
            .click(toggleBtn3)
    
            .click('#clearCompletedBtn');
    });

    test("Clear All", async t => {

        await t

        .typeText('#todo-input', 'Todo 1')
        .click('#add-button')
        .typeText('#todo-input', 'Todo 2')
        .click('#add-button')
        .typeText('#todo-input', 'Todo 3')
        .click('#add-button')

        .click('#toggleAllBtn');

    });

    test("Test for both", async t => {

        await t

        .typeText('#todo-input', 'Todo 1')
        .click('#add-button')
        .typeText('#todo-input', 'Todo 2')
        .click('#add-button')
        .typeText('#todo-input', 'Todo 3')
        .click('#add-button')

        .click('#toggleAllBtn')
        .click('#clearCompletedBtn');
    });