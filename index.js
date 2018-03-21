const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/portugese', function(req, res) {
	res.render('portugese');
});

app.get('/japanese', function(req, res) {
	res.render('japanese');
});

app.get('/french', function(req, res) {
	res.render('french');
});

app.listen(3000, () => {
	console.log('SERVER LISTENING ON PORT 3000!');
});

// $(document).ready(function() {
//     var winLocation = window.location;
//     var loc = winLocation + "";
//     if(loc.indexOf("pt.example.com/pt/") != -1) {
//        $(".lang").prop("href", loc.replace("/example.com/pt/", "/example.com/"));
//        $(".lang").text("English");
//     } else if (indexOf === ) {
//       $(".lang").prop("href", loc.replace("/example.com/jp/", "/example.com/jp"));
//        $(".lang").text("Japanese");
//     } else if () {
//       $(".lang").prop("href", loc.replace("/example.com/fr/", "/example.com/fr"));
//        $(".lang").text("French");
//     }
//     else {
//        $(".lang").prop("href", loc.replace("/example.com/", "/example.com/pt/"));
//        $(".lang").text("Português");
//     }
// });



// <ul>
//   <li><a class="lang" href="anything">anything</a></li>
//   <li><a class="lang" href="anything">anything</a></li>
//   <li><a class="lang" href="anything">anything</a></li>
//   <li><a class="lang" href="anything">anything</a></li>
// </ul>






// publisher.qordoba.com/page/?/example.com/fr/&lang=jp

// 200
// 404

