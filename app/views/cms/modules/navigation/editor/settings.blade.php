<section id="modules-navigation" ng-controller="navigationController" class='navigation'>

        Orientation:<br>
        <input type="radio" ng-model="orientation" id="orientation" value="horizontal">Horizontal<br>
        <input type="radio" ng-model="orientation" id="orientation" value="vertical">Vertical<br><br><br>

        <label for="name">Name:</label>
        <input type="text" ng-model="name" name="name"/><br/>
        <label for="name">Action:</label>
        <input type="text" ng-model="action" name="action"/><br/>

        <button ng-click="addNavItem()">+</button>

        <h2>Navigation items</h2>
        <div id="nav-items" style="border:1px dashed #ccc;">
            <ul>
                <li ng-repeat="item in items">[[item.name]] ([[item.action]]) <button ng-click="removeNavItem([[$index]])">-</button></li>
            </ul>
        </div>

        <button ng-click="add(orientation)">Add</button>

</section>

<script src="{{ URL::asset('assets/js/cms/modules/navigation/module.js') }}"></script>
