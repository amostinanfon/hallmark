
$(function(){
    $(".fr").click(function(){
//           // navbar translation into french 
//     $('.navbar-nav li:nth-child(1) a').text('Accueil');
//     $('.navbar-nav li:nth-child(2) a').text('à propos');
//     $('.navbar-nav li:nth-child(3) a').text('services');
//     $('.navbar-nav li:nth-child(4) a').text('pourquoi-nous ?');
//     $('.navbar-nav li:nth-child(5) a').text('notre équipe');
//     $('.navbar-nav li:nth-child(6) a').text('se connecter');

//     //subNavbar line with Register
//     $('.nav-menu a').first().text("créer un compte");
        $('.language .language-selected').text('FRANCAIS');
        // $('.language .language-selected').text('FRANCAIS');
//     $('.language ul li:nth-child(1) a').text('Français');
//     $('.language ul li:nth-child(2) a').text('Portugais');
        $(".language-selected").removeClass("change-pt");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-fr");

//     // slider section 
//     $('.carousel-inner .carousel-item:nth-child(1) p').text("Ripple est un système de grand livre distribué qui a été fondé en 2012. Ripple peut être utilisé pour suivre différents types de transactions, pas seulement la crypto-monnaie. L'entreprise derrière elle a travaillé avec diverses banques et institutions financières.");
//     $('.carousel-inner .carousel-item:nth-child(2) p').text("Cependant, certaines marques vont au-delà, en concevant des images accrocheuses et en écrivant des textes humoristiques pour se démarquer de la concurrence. Vous devez trouver votre angle unique pour que votre page À propos de nous soit réellement lue.");
//     $('.carousel-inner .carousel-item:nth-child(3) p').text("Que vous soyez un solopreneur, une agence de duo dynamique ou une entreprise mondiale à part entière avec des centaines de membres d'équipe, laisser les gens briller rend une page À propos de nous attrayante.");
//     $('.carousel .btn1').text('En savoir plus');

//     //services section
//     $('.service_section .heading_container h2').text('Nos Services');
//     $('.service_section .heading_container p').text('Il existe de nombreuses variantes de passages du Lorem Ipsum disponibles, mais la majorité ont subi des altérations');
//     $('.service_section .row .col-md-4:nth-child(1) h5').text('porte-monnaie');
//     $('.service_section .row .col-md-4:nth-child(1) p').text("fait qu'un lecteur sera distrait par le contenu lisible d'une page lorsqu'il regarde sa mise en page. L'intérêt d'utiliser");
//     $('.service_section .row .col-md-4:nth-child(1) a').text('En savoir plus');
//     $('.service_section .row .col-md-4:nth-child(2) h5').text('porte-monnaie');
//     $('.service_section .row .col-md-4:nth-child(2) p').text("fait qu'un lecteur sera distrait par le contenu lisible d'une page lorsqu'il regarde sa mise en page. L'intérêt d'utiliser");
//     $('.service_section .row .col-md-4:nth-child(2) a').text('En savoir plus');
//     $('.service_section .row .col-md-4:nth-child(3) h5').text('porte-monnaie');
//     $('.service_section .row .col-md-4:nth-child(3) p').text("fait qu'un lecteur sera distrait par le contenu lisible d'une page lorsqu'il regarde sa mise en page. L'intérêt d'utiliser");
//     $('.service_section .row .col-md-4:nth-child(3) a').text('En savoir plus');
//     $('.service_section .btn-box a').text('Tout voir');

//     //About page
//     $('.about_section .first span:nth-child(1)').text('Qui Sommes');
//     $('.about_section .first span:nth-child(2)').text('Nous ?');
//     $('.about_section .row .col-md-6:nth-child(2) h3').text('Nous Sommes Hallmark DWM');
//     $('.about_section .row .col-md-6:nth-child(2) p').first().text("Il existe de nombreuses variantes de passages du Lorem Ipsum disponibles, mais la majorité ont subi des altérations sous une forme ou une autre, par de l'humour injecté ou des mots aléatoires qui ne semblent même pas un peu crédibles. Si tu allez utiliser un passage du Lorem Ipsum, vous devez vous assurer qu'il n'y a rien d'embarrassant caché dans milieu du texte.");
//     $('.about_section .row .col-md-6:nth-child(2) p').last().text("Si tu allez utiliser un passage du Lorem Ipsum, vous devez vous assurer qu'il n'y a rien d'embarrassant caché dans milieu du texte.");
    
//     // why section
//     $('.why_section .second span:nth-child(1)').text('Pourquoi Nous');
//     $('.why_section .second span:nth-child(2)').text('Choisir');
//     $('.why_section .why_container .box:nth-child(1) .detail-box h5').text('Expertise en Gestion');
//     $('.why_section .why_container .box:nth-child(2) .detail-box h5').text('Investissement sécurisé');
//     $('.why_section .why_container .box:nth-child(3) .detail-box h5').text('Trading instantané');
//     $('.why_section .why_container .box:nth-child(4) .detail-box h5').text('Clients satisfaits');
//     $('.why_section .why_container .box:nth-child(1) .detail-box p').text("Les États-Unis sont un pays composé de 50 États et couvrant une grande partie de l'Amérique du Nord, avec l'Alaska au nord-ouest et Hawaï étendant la présence du pays dans l'océan Pacifique. Les principales villes de la côte atlantique sont New York, le centre financier et culturel international, et Washington, la capitale. Dans la région du Midwest, la métropole de Chicago est connue pour son architecture influente et sur la côte ouest, le quartier hollywoodien de Los Angeles est célèbre pour ses studios de cinéma");
//     $('.why_section .why_container .box:nth-child(2) .detail-box p').text("Les États-Unis sont un pays composé de 50 États et couvrant une grande partie de l'Amérique du Nord, avec l'Alaska au nord-ouest et Hawaï étendant la présence du pays dans l'océan Pacifique. Les principales villes de la côte atlantique sont New York, le centre financier et culturel international, et Washington, la capitale. Dans la région du Midwest, la métropole de Chicago est connue pour son architecture influente et sur la côte ouest, le quartier hollywoodien de Los Angeles est célèbre pour ses studios de cinéma");
//     $('.why_section .why_container .box:nth-child(3) .detail-box p').text("Les États-Unis sont un pays composé de 50 États et couvrant une grande partie de l'Amérique du Nord, avec l'Alaska au nord-ouest et Hawaï étendant la présence du pays dans l'océan Pacifique. Les principales villes de la côte atlantique sont New York, le centre financier et culturel international, et Washington, la capitale. Dans la région du Midwest, la métropole de Chicago est connue pour son architecture influente et sur la côte ouest, le quartier hollywoodien de Los Angeles est célèbre pour ses studios de cinéma");
//     $('.why_section .why_container .box:nth-child(4) .detail-box p').text("Les États-Unis sont un pays composé de 50 États et couvrant une grande partie de l'Amérique du Nord, avec l'Alaska au nord-ouest et Hawaï étendant la présence du pays dans l'océan Pacifique. Les principales villes de la côte atlantique sont New York, le centre financier et culturel international, et Washington, la capitale. Dans la région du Midwest, la métropole de Chicago est connue pour son architecture influente et sur la côte ouest, le quartier hollywoodien de Los Angeles est célèbre pour ses studios de cinéma");
//     $('.why_section .btn-box a').text('En savoir plus');  
    
//     // team styling
//     $('.team_section .heading_container .three span:nth-child(1)').text('Notre');
//     $('.team_section .heading_container .three span:nth-child(2)').text('équipe');
//     $('.team_section .team_container .row .col-lg-3:nth-child(1) .box .marketing span:nth-child(1)').text('Responsable');
//     $('.team_section .team_container .row .col-lg-3:nth-child(1) .box .marketing span:nth-child(2)').text('Marketing');
//     $('.team_section .team_container .row .col-lg-3:nth-child(1) .box h6').text('Réseaux sociaux');
//     $('.team_section .team_container .row .col-lg-3:nth-child(2) .box .marketing span:nth-child(1)').text('Responsable');
//     $('.team_section .team_container .row .col-lg-3:nth-child(2) .box .marketing span:nth-child(2)').text('Communication');
//     $('.team_section .team_container .row .col-lg-3:nth-child(2) .box h6').text('Réseaux sociaux');
//     $('.team_section .team_container .row .col-lg-3:nth-child(3) .box .marketing span:nth-child(1)').text('Responsable');
//     $('.team_section .team_container .row .col-lg-3:nth-child(3) .box .marketing span:nth-child(2)').text('Informatique');
//     $('.team_section .team_container .row .col-lg-3:nth-child(3) .box h6').text('Réseaux sociaux');
//     $('.team_section .team_container .row .col-lg-3:nth-child(4) .box .marketing span:nth-child(1)').text('Responsable');
//     $('.team_section .team_container .row .col-lg-3:nth-child(4) .box .marketing span:nth-child(2)').text('Développement');
//     $('.team_section .team_container .row .col-lg-3:nth-child(4) .box h6').text('Réseaux sociaux');

//     // client testimonies styling
//     $('.client_section .container .heading_container .four span').first().text('Ce que disent nos');
//     $('.client_section .container .heading_container .four span').last().text('Clients');
//     $('.client_section .container .carousel-wrap .owl-carousel .item:nth-child(1) .detail-box .p').text("Vous ne l'avez peut-être pas remarqué, mais vous êtes plus susceptible d'acheter un produit si la personne dans la publicité est comme vous. Vous êtes également plus susceptible de faire confiance à un témoignage s'il est fourni par quelqu'un qui ressemble à vos traits et à votre démographie.");
//     $('.client_section .container .carousel-wrap .owl-carousel .item:nth-child(2) .detail-box .p').text("Vous ne l'avez peut-être pas remarqué, mais vous êtes plus susceptible d'acheter un produit si la personne dans la publicité est comme vous. Vous êtes également plus susceptible de faire confiance à un témoignage s'il est fourni par quelqu'un qui ressemble à vos traits et à votre démographie.");
//     $('.client_section .container .carousel-wrap .owl-carousel .item:nth-child(3) .detail-box .p').text("Vous ne l'avez peut-être pas remarqué, mais vous êtes plus susceptible d'acheter un produit si la personne dans la publicité est comme vous. Vous êtes également plus susceptible de faire confiance à un témoignage s'il est fourni par quelqu'un qui ressemble à vos traits et à votre démographie.");
//     $('.client_section .container .carousel-wrap .owl-carousel .item:nth-child(4) .detail-box .p').text("Vous ne l'avez peut-être pas remarqué, mais vous êtes plus susceptible d'acheter un produit si la personne dans la publicité est comme vous. Vous êtes également plus susceptible de faire confiance à un témoignage s'il est fourni par quelqu'un qui ressemble à vos traits et à votre démographie.");


//     // info section styling
//     $('.info_section .container .row .col-md-6:nth-child(1) h4').text('Adresse');
//     $('.info_section .container .row .col-md-6:nth-child(1) .contact_link_box a:nth-child(1) span').text('Localisation');
//     $('.info_section .container .row .col-md-6:nth-child(1) .contact_link_box a:nth-child(2) span').text('Appel +237 694 291 173');
//     $('.info_section .container .row .col-md-6:nth-child(2) h4').text('Info');
//     $('.info_section .container .row .col-md-6:nth-child(2) p').text('nécessaire, ce qui en fait le premier véritable générateur sur Internet. Il utilise un dictionnaire de plus de 200 mots latins, combiné avec une poignée');
//     $('.info_section .container .row .col-md-6:nth-child(3) .info_link_box h4').text('Liens utiles');
//     $('.info_section .container .row .col-md-6:nth-child(3) .info_links a:nth-child(1)').text('Accueil');
//     $('.info_section .container .row .col-md-6:nth-child(3) .info_links a:nth-child(2)').text('A propos');
//     $('.info_section .container .row .col-md-6:nth-child(3) .info_links a:nth-child(3)').text('Services');
//     $('.info_section .container .row .col-md-6:nth-child(3) .info_links a:nth-child(4)').text('Pourquoi-nous ?');
//     $('.info_section .container .row .col-md-6:nth-child(3) .info_links a:nth-child(5)').text('Equipe ?');
//     $('.info_section .container .row .col-md-6:nth-child(4) h4').text('Souscrire');
//     $('.info_section .container .row .col-md-6:nth-child(4) form button').text('Envoyer');
//     $("#input").attr("placeholder", "Entrer votre Email");


//     // footer section designing
//     $('.footer_section .container .footer').text('Tous Droits Reservés Par');
  })

});


$(function(){
  $('.en').click(function() { 
    $(".language-selected").removeClass("change-pt");
    $(".language-selected").removeClass("change-fr");
    $(".language-selected").addClass("change-en");
    $('.language .language-selected').text('ENGLISH');
   })
})

// $(function() {
//   if (window.lang.currentLang == 'en'){
//     $('.language .language-selected').text('ENGLISH')
//   }else if (window.lang.currentLang == 'fr') {
//     $('.language .language-selected').text('FRANCAIS')
//   }

// })


