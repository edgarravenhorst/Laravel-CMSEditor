<section id="modules-content" ng-controller="contentController" class='content'>
    <textarea id="edit" ng-model="htmlText" id="html" name="content"></textarea>
    <button ng-click="add()">Add</button>
</section>

<!-- CSS -->
<link href="{{ URL::asset('assets/css/froala/froala_editor.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ URL::asset('assets/css/froala/froala_style.min.css') }}" rel="stylesheet" type="text/css" />


<!-- JS -->
<script src="{{ URL::asset('assets/js/froala/froala_editor.min.js') }}"></script>

  <script>
      $(function() {
          $('#edit').editable({inlineMode: false, width: 250, height: 400})
      });
  </script>
