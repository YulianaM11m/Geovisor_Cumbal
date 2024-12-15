var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Municipio_1 = new ol.format.GeoJSON();
var features_Municipio_1 = format_Municipio_1.readFeatures(json_Municipio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipio_1.addFeatures(features_Municipio_1);
var lyr_Municipio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipio_1, 
                style: style_Municipio_1,
                popuplayertitle: 'Municipio',
                interactive: true,
                title: '<img src="styles/legend/Municipio_1.png" /> Municipio'
            });
var format_Resguardos_2 = new ol.format.GeoJSON();
var features_Resguardos_2 = format_Resguardos_2.readFeatures(json_Resguardos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resguardos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resguardos_2.addFeatures(features_Resguardos_2);
var lyr_Resguardos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Resguardos_2, 
                style: style_Resguardos_2,
                popuplayertitle: 'Resguardos',
                interactive: true,
    title: 'Resguardos<br />\
    <img src="styles/legend/Resguardos_2_0.png" /> Chiles<br />\
    <img src="styles/legend/Resguardos_2_1.png" /> Cumbal<br />\
    <img src="styles/legend/Resguardos_2_2.png" /> Mayasquer<br />\
    <img src="styles/legend/Resguardos_2_3.png" /> Miraflores<br />\
    <img src="styles/legend/Resguardos_2_4.png" /> Panan<br />\
    <img src="styles/legend/Resguardos_2_5.png" /> San Juan<br />\
    <img src="styles/legend/Resguardos_2_6.png" /> <br />'
        });
var format_CabeceraMunicipal_3 = new ol.format.GeoJSON();
var features_CabeceraMunicipal_3 = format_CabeceraMunicipal_3.readFeatures(json_CabeceraMunicipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabeceraMunicipal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabeceraMunicipal_3.addFeatures(features_CabeceraMunicipal_3);
var lyr_CabeceraMunicipal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CabeceraMunicipal_3, 
                style: style_CabeceraMunicipal_3,
                popuplayertitle: 'Cabecera Municipal',
                interactive: true,
                title: '<img src="styles/legend/CabeceraMunicipal_3.png" /> Cabecera Municipal'
            });
var format_Vias_4 = new ol.format.GeoJSON();
var features_Vias_4 = format_Vias_4.readFeatures(json_Vias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_4.addFeatures(features_Vias_4);
var lyr_Vias_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vias_4, 
                style: style_Vias_4,
                popuplayertitle: 'Vias',
                interactive: true,
                title: '<img src="styles/legend/Vias_4.png" /> Vias'
            });
var format_SitiosReligiososyEspirituales_5 = new ol.format.GeoJSON();
var features_SitiosReligiososyEspirituales_5 = format_SitiosReligiososyEspirituales_5.readFeatures(json_SitiosReligiososyEspirituales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiosReligiososyEspirituales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiosReligiososyEspirituales_5.addFeatures(features_SitiosReligiososyEspirituales_5);
var lyr_SitiosReligiososyEspirituales_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiosReligiososyEspirituales_5, 
                style: style_SitiosReligiososyEspirituales_5,
                popuplayertitle: 'Sitios Religiosos y Espirituales',
                interactive: true,
                title: '<img src="styles/legend/SitiosReligiososyEspirituales_5.png" /> Sitios Religiosos y Espirituales'
            });
var format_SitiosGastronomicos_6 = new ol.format.GeoJSON();
var features_SitiosGastronomicos_6 = format_SitiosGastronomicos_6.readFeatures(json_SitiosGastronomicos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiosGastronomicos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiosGastronomicos_6.addFeatures(features_SitiosGastronomicos_6);
var lyr_SitiosGastronomicos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiosGastronomicos_6, 
                style: style_SitiosGastronomicos_6,
                popuplayertitle: 'Sitios Gastronomicos',
                interactive: true,
                title: '<img src="styles/legend/SitiosGastronomicos_6.png" /> Sitios Gastronomicos'
            });
var format_SitiosCulturales_7 = new ol.format.GeoJSON();
var features_SitiosCulturales_7 = format_SitiosCulturales_7.readFeatures(json_SitiosCulturales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiosCulturales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiosCulturales_7.addFeatures(features_SitiosCulturales_7);
var lyr_SitiosCulturales_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiosCulturales_7, 
                style: style_SitiosCulturales_7,
                popuplayertitle: 'Sitios Culturales',
                interactive: true,
                title: '<img src="styles/legend/SitiosCulturales_7.png" /> Sitios Culturales'
            });
var format_AtractivosTuristicos_8 = new ol.format.GeoJSON();
var features_AtractivosTuristicos_8 = format_AtractivosTuristicos_8.readFeatures(json_AtractivosTuristicos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AtractivosTuristicos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtractivosTuristicos_8.addFeatures(features_AtractivosTuristicos_8);
var lyr_AtractivosTuristicos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AtractivosTuristicos_8, 
                style: style_AtractivosTuristicos_8,
                popuplayertitle: 'Atractivos Turisticos',
                interactive: true,
                title: '<img src="styles/legend/AtractivosTuristicos_8.png" /> Atractivos Turisticos'
            });
var format_Alojamientos_9 = new ol.format.GeoJSON();
var features_Alojamientos_9 = format_Alojamientos_9.readFeatures(json_Alojamientos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alojamientos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alojamientos_9.addFeatures(features_Alojamientos_9);
var lyr_Alojamientos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alojamientos_9, 
                style: style_Alojamientos_9,
                popuplayertitle: 'Alojamientos',
                interactive: true,
                title: '<img src="styles/legend/Alojamientos_9.png" /> Alojamientos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Municipio_1.setVisible(true);lyr_Resguardos_2.setVisible(true);lyr_CabeceraMunicipal_3.setVisible(true);lyr_Vias_4.setVisible(true);lyr_SitiosReligiososyEspirituales_5.setVisible(true);lyr_SitiosGastronomicos_6.setVisible(true);lyr_SitiosCulturales_7.setVisible(true);lyr_AtractivosTuristicos_8.setVisible(true);lyr_Alojamientos_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Municipio_1,lyr_Resguardos_2,lyr_CabeceraMunicipal_3,lyr_Vias_4,lyr_SitiosReligiososyEspirituales_5,lyr_SitiosGastronomicos_6,lyr_SitiosCulturales_7,lyr_AtractivosTuristicos_8,lyr_Alojamientos_9];
lyr_Municipio_1.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'nombre': 'nombre', 'area': 'area', 'poblacion': 'poblacion', 'departamen': 'departamen', 'codigo_mun': 'codigo_mun', });
lyr_Resguardos_2.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'nombre': 'nombre', 'area': 'area', 'perimetro': 'perimetro', 'codigo': 'codigo', 'cod_mun': 'cod_mun', });
lyr_CabeceraMunicipal_3.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'nombre': 'nombre', 'area': 'area', 'codigo': 'codigo', 'cod_mun': 'cod_mun', });
lyr_Vias_4.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'nombre': 'nombre', 'longitud': 'longitud', 'municipio': 'municipio', 'estado': 'estado', 'codigo': 'codigo', 'jerarquia': 'jerarquia', });
lyr_SitiosReligiososyEspirituales_5.set('fieldAliases', {'gid': 'gid', 'nombre': 'nombre', 'patrimonio': 'patrimonio', 'estado': 'estado', 'capacidad': 'capacidad', 'resguardo': 'resguardo', 'codigo': 'codigo', 'cod_resg': 'cod_resg', 'tipo': 'tipo', });
lyr_SitiosGastronomicos_6.set('fieldAliases', {'gid': 'gid', 'nombre': 'nombre', 'especialid': 'especialid', 'costo': 'costo', 'direccion': 'direccion', 'telefono': 'telefono', 'capacidad': 'capacidad', 'resguardo': 'resguardo', 'codigo': 'codigo', 'tipo': 'tipo', 'cod_resg': 'cod_resg', });
lyr_SitiosCulturales_7.set('fieldAliases', {'gid': 'gid', 'nombre': 'nombre', 'capacidad': 'capacidad', 'estado': 'estado', 'patrimonio': 'patrimonio', 'resguardo': 'resguardo', 'codigo': 'codigo', 'tipo': 'tipo', 'cod_resg': 'cod_resg', });
lyr_AtractivosTuristicos_8.set('fieldAliases', {'gid': 'gid', 'nombre': 'nombre', 'resguardo': 'resguardo', 'accecibili': 'accecibili', 'codigo': 'codigo', 'tipo': 'tipo', 'cod_resg': 'cod_resg', });
lyr_Alojamientos_9.set('fieldAliases', {'gid': 'gid', 'nombre': 'nombre', 'celular': 'celular', 'capacidad': 'capacidad', 'codigo': 'codigo', 'tipo': 'tipo', 'resguardo': 'resguardo', 'cod_resg': 'cod_resg', });
lyr_Municipio_1.set('fieldImages', {'gid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'nombre': 'TextEdit', 'area': 'TextEdit', 'poblacion': 'TextEdit', 'departamen': 'TextEdit', 'codigo_mun': 'TextEdit', });
lyr_Resguardos_2.set('fieldImages', {'gid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'nombre': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', 'codigo': 'TextEdit', 'cod_mun': 'TextEdit', });
lyr_CabeceraMunicipal_3.set('fieldImages', {'gid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'nombre': 'TextEdit', 'area': 'TextEdit', 'codigo': 'TextEdit', 'cod_mun': 'TextEdit', });
lyr_Vias_4.set('fieldImages', {'gid': 'TextEdit', 'shape_leng': 'TextEdit', 'nombre': 'TextEdit', 'longitud': 'TextEdit', 'municipio': 'TextEdit', 'estado': 'TextEdit', 'codigo': 'TextEdit', 'jerarquia': 'TextEdit', });
lyr_SitiosReligiososyEspirituales_5.set('fieldImages', {'gid': 'TextEdit', 'nombre': 'TextEdit', 'patrimonio': 'TextEdit', 'estado': 'TextEdit', 'capacidad': 'TextEdit', 'resguardo': 'TextEdit', 'codigo': 'Range', 'cod_resg': 'TextEdit', 'tipo': 'TextEdit', });
lyr_SitiosGastronomicos_6.set('fieldImages', {'gid': 'TextEdit', 'nombre': 'TextEdit', 'especialid': 'TextEdit', 'costo': 'TextEdit', 'direccion': 'TextEdit', 'telefono': 'TextEdit', 'capacidad': 'TextEdit', 'resguardo': 'TextEdit', 'codigo': 'Range', 'tipo': 'TextEdit', 'cod_resg': 'TextEdit', });
lyr_SitiosCulturales_7.set('fieldImages', {'gid': 'TextEdit', 'nombre': 'TextEdit', 'capacidad': 'TextEdit', 'estado': 'TextEdit', 'patrimonio': 'TextEdit', 'resguardo': 'TextEdit', 'codigo': 'Range', 'tipo': 'TextEdit', 'cod_resg': 'TextEdit', });
lyr_AtractivosTuristicos_8.set('fieldImages', {'gid': 'TextEdit', 'nombre': 'TextEdit', 'resguardo': 'TextEdit', 'accecibili': 'TextEdit', 'codigo': 'Range', 'tipo': 'TextEdit', 'cod_resg': 'TextEdit', });
lyr_Alojamientos_9.set('fieldImages', {'gid': 'TextEdit', 'nombre': 'TextEdit', 'celular': 'TextEdit', 'capacidad': 'TextEdit', 'codigo': 'Range', 'tipo': 'TextEdit', 'resguardo': 'TextEdit', 'cod_resg': 'TextEdit', });
lyr_Municipio_1.set('fieldLabels', {'gid': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'nombre': 'inline label - always visible', 'area': 'hidden field', 'poblacion': 'inline label - always visible', 'departamen': 'inline label - always visible', 'codigo_mun': 'inline label - always visible', });
lyr_Resguardos_2.set('fieldLabels', {'gid': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'nombre': 'inline label - always visible', 'area': 'hidden field', 'perimetro': 'hidden field', 'codigo': 'inline label - always visible', 'cod_mun': 'hidden field', });
lyr_CabeceraMunicipal_3.set('fieldLabels', {'gid': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'nombre': 'inline label - always visible', 'area': 'hidden field', 'codigo': 'inline label - always visible', 'cod_mun': 'hidden field', });
lyr_Vias_4.set('fieldLabels', {'gid': 'hidden field', 'shape_leng': 'hidden field', 'nombre': 'inline label - always visible', 'longitud': 'hidden field', 'municipio': 'inline label - always visible', 'estado': 'hidden field', 'codigo': 'hidden field', 'jerarquia': 'inline label - always visible', });
lyr_SitiosReligiososyEspirituales_5.set('fieldLabels', {'gid': 'hidden field', 'nombre': 'inline label - always visible', 'patrimonio': 'hidden field', 'estado': 'inline label - always visible', 'capacidad': 'hidden field', 'resguardo': 'inline label - always visible', 'codigo': 'hidden field', 'cod_resg': 'hidden field', 'tipo': 'inline label - always visible', });
lyr_SitiosGastronomicos_6.set('fieldLabels', {'gid': 'no label', 'nombre': 'inline label - always visible', 'especialid': 'inline label - always visible', 'costo': 'hidden field', 'direccion': 'inline label - always visible', 'telefono': 'inline label - always visible', 'capacidad': 'hidden field', 'resguardo': 'inline label - always visible', 'codigo': 'hidden field', 'tipo': 'inline label - always visible', 'cod_resg': 'hidden field', });
lyr_SitiosCulturales_7.set('fieldLabels', {'gid': 'hidden field', 'nombre': 'inline label - always visible', 'capacidad': 'hidden field', 'estado': 'inline label - always visible', 'patrimonio': 'hidden field', 'resguardo': 'inline label - always visible', 'codigo': 'hidden field', 'tipo': 'inline label - always visible', 'cod_resg': 'hidden field', });
lyr_AtractivosTuristicos_8.set('fieldLabels', {'gid': 'hidden field', 'nombre': 'inline label - always visible', 'resguardo': 'inline label - always visible', 'accecibili': 'hidden field', 'codigo': 'hidden field', 'tipo': 'inline label - always visible', 'cod_resg': 'hidden field', });
lyr_Alojamientos_9.set('fieldLabels', {'gid': 'hidden field', 'nombre': 'inline label - always visible', 'celular': 'inline label - always visible', 'capacidad': 'hidden field', 'codigo': 'hidden field', 'tipo': 'inline label - always visible', 'resguardo': 'inline label - always visible', 'cod_resg': 'hidden field', });
lyr_Alojamientos_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});