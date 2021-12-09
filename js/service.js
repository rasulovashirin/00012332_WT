// custom functions
var $_ = function (selector, node = document) {
    return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
    return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
    var newElement = document.createElement(element);
    
    if (elementClass) {
        newElement.setAttribute('class', elementClass);
    }
    
    if (text) {
        newElement.textContent = text;
    }
    
    return newElement;
}

// mock data
var services = [
    {
        id: 1,
        image: "img/doctor.png", 
        title: "Первичный осмотр",
        text:"По условиям акции в нашей клинике предоставляетса безплатная услуга",
    },
    {
        id: 2,
        image: "img/girl-doctor.png", 
        title: "Первичный осмотр",
        text:"По условиям акции в нашей клинике предоставляетса безплатная услуга",
    },
    {
        id: 3,
        image: "img/ill-dog.png", 
        title: "Хирургическое вмешательство",
        text:"По условиям акции в нашей клинике предоставляетса безплатная услуга",
    },
    {
        id: 4,
        image: "img/derm.png", 
        title: "Дерматология",
        text:"По условиям акции в нашей клинике предоставляетса безплатная услуга",
    },
    {
        id: 5,
        image: "img/labo.png", 
        title: "Лабораторная диагностика",
        text:"По условиям акции в нашей клинике предоставляетса безплатная услуга",
    },
    {
        id: 6,
        image: "img/plus-dog.png", 
        title: "Офтальмология",
        text:"По условиям акции в нашей клинике предоставляетса безплатная услуга",
    },
    {
        id: 7,
        image: "img/uzi.png", 
        title: "УЗИ диагностика",
        text:"По условиям акции в нашей клинике предоставляетса безплатная услуга",
    },
    {
        id: 8,
        image: "img/injec.png", 
        title: "Чипированиея",
        text:"По условиям акции в нашей клинике предоставляетса безплатная услуга",
    },
    {
        id: 9,
        image: "img/passport.png", 
        title: "Международ-ные паспорта",
        text:"По условиям акции в нашей клинике предоставляетса безплатная услуга",
    },
    {
        id: 10,
        image: "img/vac.png", 
        title: "Вакцинация",
        text:"По условиям акции в нашей клинике предоставляетса безплатная услуга",
    },
    {
        id: 11,
        image: "img/stom.png", 
        title: "Стоматология",
        text:"По условиям акции в нашей клинике предоставляетса безплатная услуга",
    },
    {
        id: 12,
        image: "img/home.png", 
        title: "Вызов на дом",
        text:"По условиям акции в нашей клинике предоставляетса безплатная услуга",
    }
]

// html lists
var servicesList = document.querySelector('.s-list');

// html template
var serviceTemplate = document.querySelector('.service-template').content;

// fragments
var servicesFragment = document.createDocumentFragment();

// rendering data
services.forEach(function (service , index) {
    var serviceItem= serviceTemplate.cloneNode(true);
    $_('.s-img', serviceItem).src = service.image;
    $_('.s-header', serviceItem).textContent = service.title;
    $_('.s-text', serviceItem).textContent = service.text;
    servicesFragment.appendChild(serviceItem);    
})
servicesList.appendChild(servicesFragment);

