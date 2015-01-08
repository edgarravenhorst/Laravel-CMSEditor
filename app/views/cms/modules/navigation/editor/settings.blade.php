<section id="modules-navigation" class='navigation'>

    <form method="" id="myForm">

        Choose an orientation:<br>
        <input type="radio" name="orientation" value="horizontal">Horizontal<br>
        <input type="radio" name="orientation" value="vertical">Vertical<br><br><br>

        Type of buttons:<br>
        <input type="radio" name="buttons_type" value="small">Small<br>
        <input type="radio" name="buttons_type" value="medium">Medium<br>
        <input type="radio" name="buttons_type" value="big">Big<br><br>

        <input type="button" value="activate" name="submit" id="submit"/>

    </form>

</section>

<script src="{{ URL::asset('assets/js/cms/modules/navigation/module.js') }}"></script>
