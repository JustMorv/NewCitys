document.addEventListener("click",(event)=>{
	if(event.target.classList.contains("buttons_link_russ")){

		myFuncRuss();
	}
	if(event.target.classList.contains("buttons_link_kaz")){

		myFuncKazz();
	}

})



function myFuncRuss(event){

	// header
	getItems("about_as_trasiteons").innerHTML ="О&nbsp;нас "
	getItems("gos_trasiteons").innerHTML = "Государственные услуги"
	getItems("about_pay_trasiteons").innerHTML = "Государственные закупки"
	getItems("news_trasiteons").innerHTML = "Новости"

	// logo center title
	
	getItems("logo_center_title").innerHTML = "ДЕТСКИЙ САДИК БАЛДАУРЕН"

		// footer	
	getItems("footer_about_as").innerHTML ="О&nbsp;нас "
	getItems("footer_gos_trasiteons").innerHTML = "Государственные услуги"
	getItems("footer_gos_pay").innerHTML = "Государственные закупки"
	getItems("footer_news").innerHTML = "Новости"

	getItems("footer_contact_tell").innerHTML = "контакты"

    getItems("footer_contact_about").innerHTML = "О&nbsp;нас "
	getItems("footer_contact_about-text").innerHTML = "Наш детский сад — это островок детства; где интересные и увлекательные занятия, которые проводят с детьми наши воспитатели; это праздники, развлечения, проекты… и многое — многое другое."



	// about_as	

	getItems("about_us_site").innerHTML = "О нас"
	getItems("about_us_site-text").innerHTML = "Наш детский сад — это островок детства; где интересные и увлекательные занятия, которые проводят с детьми наши воспитатели; это праздники, развлечения, проекты… и многое — многое другое, которое надо только увидеть, чтобы оценить! Педагогический коллектив детского сада избрал своим девизом слова великого педагога В.А. Сухомлинского: «Детство — важнейший период человеческой жизни, не подготовка к будущей жизни, а настоящая, яркая, самобытная, неповторимая жизнь. И того, как прошло детство, кто вёл ребёнка за руку в детские годы, что вошло в его разум и сердце из окружающего мира, — от этого в решающей степени зависит, каким человеком станет сегодняшний малыш»."





}

function myFuncKazz(event){

	// header
	getItems("about_as_trasiteons").innerHTML = "біз туралы"
	getItems("gos_trasiteons").innerHTML = "Мемлекеттік қызметтер"
	getItems("about_pay_trasiteons").innerHTML = "Мемлекеттік сатып алу"
	getItems("news_trasiteons").innerHTML = "Жаңалықтар";

	// logo center title
	getItems("logo_center_title").innerHTML = "БАЛДӘУРЕН БАЛАБАҚШАСЫ"

	getItems("footer_contact_about").innerHTML = "біз туралы"
	getItems("footer_contact_about-text").innerHTML = "Біздің балабақша-бұл балалық шақтың аралы; мұнда біздің тәрбиешілер балалармен өткізетін қызықты және қызықты іс — шаралар; бұл мерекелер, ойын-сауық, ҰБТ жобалары және тағы басқалар."

	// footer
	getItems("footer_about_as").innerHTML = "біз туралы"
	getItems("footer_gos_trasiteons").innerHTML = "Мемлекеттік қызметтер"
	getItems("footer_gos_pay").innerHTML = "Мемлекеттік сатып алу"
	getItems("footer_news").innerHTML = "Жаңалықтар";

	getItems("footer_contact_tell").innerHTML = "байланыс";

	// about_us

	getItems("about_us_site").innerHTML = "біз туралы"
	getItems("about_us_site-text").innerHTML = "ЖБіздің балабақша-бұл балалық шақтың аралы; мұнда біздің тәрбиешілер балалармен өткізетін қызықты және қызықты іс — шаралар; бұл мерекелер, ойын-сауық, ҰБТ жобалары және тағы басқалар, оны бағалау үшін көру керек! Балабақшаның педагогикалық ұжымы өзінің ұранымен Ұлы педагог В. А. Сухомлинскийдің сөздерін таңдады: балалық шақ — адам өмірінің маңызды кезеңі, болашақ өмірге дайындық емес, шынайы, жарқын, ерекше, ерекше өмір. Балалық шақтың қалай өткені, баланың балалық шағында қолын кім басқарғаны, оның ақыл — ойы мен жүрегіне қоршаған әлемнен не кіргені-бүгінгі баланың қандай адам болатыны шешуші дәрежеде байланысты"



}


function getItems(items){
	let elem  = document.querySelector("#"+items);
	return elem;
}

