$(document).ready(function(){
	var input = $('#search');
	input.keyup(function(e){              //escribe elemento a elemento de la barra de busqueda y lo pasa a la variable username
		var username= e.target.value;
		$('#repos').empty();			

		$.ajax({
			url:'https://api.github.com/users/'+username,   //solicitud a la pagina para buscar al usuario
			data:{
				client_id:'ce4bd3c322bb99ecca84',
				client_secret:'f82ece97d5927c98ac63adba50a807c74809a1b9'
			}
		}).done(function(user){
			$.ajax({
				url:'https://api.github.com/users/'+username+'/repos',  //solicitud a la pagina para buscar los repos de ese usuario
				data:{
					client_id:'ce4bd3c322bb99ecca84',
					client_secret:'f82ece97d5927c98ac63adba50a807c74809a1b9'
				}

			}).done(function(repos){
				$.each(repos,function(index,repo){
					$('#repos').append(		    //por cada repositorio crea un div con todos sus elementos respectivos
						'<div class="well">'+
							'<div class="row">'+
								'<div class="col-md-9">'+
									'<h2>'+repo.name+'</h2>'+repo.description+
								'</div>'+
								'<div class="funciones">'+
								//'<ul id="lista2">'+
									'<button type="button"  class="fork"><strong>Forks:'+repo.forks_count+'</strong></button>'+
									'<button type="button"  class="fork2"><strong>Watchers:'+repo.watchers_count+'</strong></button>'+
									'<button type="button"  class="fork3"><strong>Stars:</strong>'+repo.stargazers_count+'</button>'+
								//'</ul>'+
								'</div>'+					

							'</div>'+
						'</div>');
				});

			});
			$('#contenido').html(
				'<div class="panel panel-default">'+	//informacion del usuario
					'<header class=panel-heading>'+
						'<h1 class=panel-title>'+user.name+'</h1>'+
					'</header>'+
				'</div>'+
				'<div class="panel-body">'+
					'<div class="row">'+
						'<figure class="col-md-3">'+
							'<img style="width:100%" class="thumbnail avatar" src="'+user.avatar_url+'">'+
						'</figure>'+
							'<div class="col-md-9">'+
								'<span class="btn btn-primary">Public Repos:'+user.public_repos+'</span>'+
								'<span class="btn btn-danger">Public Gists:'+user.public_gists+'</span>'+
								'<span class="btn btn-warning">Public Followers:'+user.followers+'</span>'+
								'<span class="btn btn-info">Public Following:'+user.following+'</span>'+
								'<br><br>'+
							'</div>'+
						'</div>'+
					'</div>'+

				'</div>');
				'<h3>Repositorios</h3>'+
				'<div id="repos"></div>'
		});

	});
	/*var fork = $('#fork');    //prueba para fork
	fork.click(function(){
		$.ajax({
			url:'https://api.github.com/repos/josuepl/Compiladores/forks',
			type:"GET",
			datatype:"json",
			data:{
					client_id:'ce4bd3c322bb99ecca84',
					client_secret:'f82ece97d5927c98ac63adba50a807c74809a1b9'
				}
		}).done(function(data){
			alert("hola mundo2");
			$.ajax({
				url:'https://api.github.com/repos/josuepl/Compiladores/forks',
				type:"POST",
				datatype:"data.json",
				data:{
					Username: 'credentials.name',
					Password: 'credentials.password'
				}
			}).done(function(){
				alert("hola mundo");
			});
		});
		
		
	});*/
	
	
	


})