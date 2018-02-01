<link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='semantic.min.css') }}">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
<script src="{{ url_for('static', filename='semantic.min.js') }}"></script>
<style>
    footer {
    padding-top: 10px;
    margin-top: 54px!important;
    height: 40px;
    background-color: white;
    border-top: 1px solid #d6d6d6;
    clear: both;
    width: 100%;
    color: #888888;
}
.full.height {
    padding: 0;
    margin: 0 0 -80px 0;
    min-height: 94%;
}
body {
    background-color: #f5f5f5;
}
</style>
<div class="ui inverted fixed-height stackable menu main" id="navbar" style="margin: 0; margin-bottom: 10px;">
	<div class="ui container">
		<div class="item">
			<b><a href="/" title="Домашняя страница">Домашняя страница</a></b>
        </div>
            <a class="item" href="{{ url_for('lessons') }}">Уроки</a>
			<div class="ui dropdown item" tabindex="0">
				<span><a href="{{ url_for('support') }}">Помощь</a></span>
				<div class="menu" tabindex="-1">
                </div>
			</div>          
            <!-- <i class="red heart icon"> -->
		</div>
	</div>
</div>
<div class="full height">
<div class="ui container">
{% block body %}{% endblock %}
</div>
</div>
<footer>
        <div class="ui container">
        <div class="ui left">
        © 2018 Разработано <a href="http://tumkascor.ru">TumkasCor</a> with <i class="red heart icon"></i>
        </div>
        </div>
        </footer>