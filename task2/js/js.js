window.onload = function() {
    document.getElementById('superButton').onclick = function()
    {

        document.body.className = 'class-new';
        document.getElementById('buttonOne').className = 'class-buttonOne';
    }
}

function cl(){
    document.body.innerHTML = '';
    document.body.innerHTML = "<style>*{box-sizing: border-box;}html, body {padding: 0;margin: 0;font-family: verdana, arial, sans-serif;}body {color: #ffffff;font-size: 1.1em;padding: 1em;display: flex;flex-direction: column;}main {display: flex;flex-direction: column;}article {background-color: #7a4e70;flex: 2 2 12em;padding: 1em;}nav, aside {flex: 1;background-color: #603e59;}nav {order: -1;}header, footer {flex: 0 0 5em;background-color: #4c3046;}</style>\
    <header>\
    <p>Header</p>\
    </header>\
    <main>\
    <article>\
    <h1>Что такое Lorem Ipsum?</h1>\
    </article>\
    <nav>\
    <p>Navigation</p>\
    </nav>\
    <aside>\
    <p>Sidebar</p>\
    </aside>\
    </main>\
    <footer>\
    <p>Footer</p>\
    </footer>"
}