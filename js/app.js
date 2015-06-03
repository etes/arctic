npolarBasemapUrl= '//geodata.npolar.no/arcgis/rest/services/inspire1/NP_TopoArktis_UPSN_CLX/MapServer';

// get the projection definition for EPSG:32611 from http://epsg.io/32661.js
// resolutions from the tileInfo in https://geodata.npolar.no/arcgis/rest/services/inspire1/NP_TopoArktis_UPSN_CLX/MapServer?f=json
npolarCrs = new L.Proj.CRS('EPSG:32611',
		'+proj=stere +lat_0=90 +lat_ts=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +ellps=WGS84 +datum=WGS84 +units=m +no_defs ', {
			transformation: new L.Transformation(1, 5120900, -1, 9998100),
	  		resolutions: [21674.7100160867,
	  			10837.35500804335,
	      			5418.677504021675,
	      			2709.3387520108377,
	      			1354.6693760054188,
	      			677.3346880027094,
	      			338.6673440013547,
	      			169.33367200067735,
	      			84.66683600033868,
	      			42.33341800016934]
		});


var npolarTiledLayer = new L.esri.Layers.TiledMapLayer(npolarBasemapUrl, {
	maxZoom: 9,
	minZoom: 0,
    	continuousWorld: true
});

var map = new L.map('map', {
	crs: npolarCrs,
    	center: [78.0, 15.0],
    	zoom: 3,
    	layers: [npolarTiledLayer]
});

var hash = new L.hash(map);
