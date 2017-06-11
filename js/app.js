// $(function(){
  



//   var Place=function(place){
//     this.title= ko.observable(place.title);
//     this.location= ko.observable(place.location);
//     this.visible=true;
//   };

//   var MapViewModel=function(){
//     var self=this;

//     self.locations=ko.observableArray([]);

//     locations.forEach(function(place){
//       self.locations.push(new Place(place));
//     });

    
//   };

//   ko.applyBindings(new MapViewModel());
   
// });
        






// function init(){
// 		var map = new AMap.Map('map', {
        
//             resizeEnable: true,
//             center: [114.398736,30.520789],
//             zoom : 13,
//         });  
//         var infoWindow= new AMap.InfoWindow({
//         	offset:new AMap.Pixel(0,-28),
//         }); 
//         for (var i = 0; i < locations.length; i++) {
//         	var marker=new AMap.Marker({
//         		position:locations[i].location,
//         		title:locations[i].title,
//         		map:map,
        		
//         		animation:'AMAP_ANIMATION_DROP',
//         	});
//         	marker.content=locations[i].title;
//         	marker.on('click',markerClick);
        	  	
//         }

//         function markerClick(e){
// 			infoWindow.setContent(e.target.content);
// 			infoWindow.open(map,e.target.getPosition());
// 		}

// 		AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView','AMap.MapType'],
// 		    function(){
// 		        map.addControl(new AMap.ToolBar());

// 		        map.addControl(new AMap.Scale());

// 		        map.addControl(new AMap.OverView({isOpen:true}));

// 		        map.addControl(new AMap.MapType());
// 		});
        

       
// 	}


var universities = [
    {name: '中国地质大学（武汉）', location: {lat: 30.520774, lng: 114.398904}},
    {name: '华中科技大学', location: {lat: 30.515978, lng: 114.414725}},
    {name: '武汉大学', location: {lat: 30.53786, lng: 114.365248}},
    {name: '武汉理工大学', location: {lat: 30.518672, lng: 114.353978}},
    {name: '中南财经政法大学', location: {lat: 30.473399, lng: 114.381502}},
    {name: '华中农业大学', location: {lat: 30.475421, lng: 114.35673}},
    {name: '中南民族大学', location: {lat: 30.48668, lng: 114.39316}},
];

var University = function(university){
    this.name = ko.observable(university.name);
    this.location = ko.observable(university.location);
    this.visible = ko.observable(true);
}

var MapViewModel = function(data){
    var self=this;

    self.universities=ko.observableArray([]);

    data.forEach(function(university){
        self.universities.push(new University(university));


    });

    self.init = function(){
        var mapSettings = {
            disableDefaultUI : true,
            zoom: 19,
            center: self.center,
        };

        self.map = new google.maps.Map(document.getElementById('map'), mapSettings);
    }

};

ko.applyBindings(new MapViewModel(universities));




