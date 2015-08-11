requirejs.config({
    baseUrl: "./",
    paths: {
        mds: "static/js/mds",
        backtotop: "static/components/backtotop/js/backtotop",
        bootstrap: "static/components/bootstrap/js",
        brandkit: "static/components/brandkit/js/cdx-brandkit",
        "collapsible-list": "static/components/collapsible-list/js/collapsible-list",
        carousel: "static/components/carousel/js/carousel",
        "font-awesome": "static/components/font-awesome",
        "ge-bootstrap": "static/components/ge-bootstrap/js/ge-bootstrap",
        jquery: "static/components/jquery/jquery",
        "jquery-csv": "static/components/jquery-csv/src/jquery.csv",
        "jqueryui-sortable-amd": "static/components/jqueryui-sortable-amd/js/jquery-ui-1.10.2.custom",
        jumpnav: "static/components/jumpnav/js/jumpnav",
        "navbar": "static/components/navbar/js/navbar",
        modernizr: "static/components/modernizr/modernizr",
        modules: "static/components/modules/js/modules",
        respond: "static/components/respond/respond.src",
        "responsive-emitter": "static/components/responsive-emitter/js/responsive-emitter",
        spinner: "static/components/spinner/js/spinner",
        slider: "static/components/slider/js/slider",
        spin: "static/components/spin.js/dist/spin",
        "blog-content": "static/components/blog-content/less/blog-content.less",
        "bootstrap-datepicker": "static/components/bootstrap-datepicker/js/bootstrap-datepicker",
        datepicker: "static/components/datepicker/js/datepicker",
        contextmenu: "static/components/contextmenu/js/contextmenu",
        "jQuery-contextMenu": "static/components/jQuery-contextMenu/src/jquery.contextMenu",
        scrolly: "static/components/scrolly/js/scrolly",
        requirejs: "static/components/requirejs/require",
        "jquery-backstretch": "static/components/jquery-backstretch/jquery.backstretch",
        masonry: "static/js/masonry.pkgd",
        "responsive-tables": "static/components/responsive-tables/js/responsive-tables",
        videoplayer: "static/components/videoplayer/js/videoplayer",
        videojs: "static/components/videoplayer/js/video",
        "multi-step-navigation": "static/components/multi-step-navigation/js/multi-step-navigation",
        "twitter-bootstrap-wizard": "static/components/twitter-bootstrap-wizard/jquery.bootstrap.wizard",
        feedback: "static/components/feedback/js/feedback",
        "contact-list": "static/components/contact-list/js/contact-list",
        "events-list": "static/components/events-list/js/events-list",
        "bootstrap-switch": "static/components/bootstrap-switch/static/js/bootstrap-switch",
        "d3-amd": "static/components/d3-amd/d3",
        "declarative-visualizations": "static/components/declarative-visualizations/js/declarative-visualizations",
        pubsub: "static/components/map-core/js/pubsub",
        'underscore': 'static/components/underscore-amd/index',
        OpenLayers: 'static/components/open-layers/dist/OpenLayers',
        "map-cluster": "static/components/map-cluster/js/map-cluster",
        "map-core": "static/components/map-core/js/map-core",
        "map-geolocate": "static/components/map-geolocate/js/map-geolocate",
        "map-google": "static/components/map-google/js/googlemaps",
        "map-layerlist": "static/components/map-layerlist/js/map-layer-list",
        "map-markers": "static/components/map-markers/js/map-markers",
        "map-popovers": "static/components/map-popovers/js/map-popovers",
        "map-search": "static/components/map-search/js/map-search",
        "map-zoom": "static/components/map-zoom/js/map-zoom",
        "oo-utils": "static/components/oo-utils/src/js/oo-utils",
        "toggle-switch": "static/components/toggle-switch/src/js/toggle-switch",
        charts: "static/components/charts/js/charts",
        "highcharts": "static/components/highcharts-amd/js/highcharts.src",
        "highstock": "static/components/highcharts-amd/js/highstock.src",
        "highcharts-more": "static/components/highcharts-amd/js/highcharts-more.src",
        "typeahead": "static/components/typeahead.js/dist/typeahead.bundle.min",
        "multi-level-nav": "static/js/multi-level-nav"
    },
    shim: {
        "jquery-backstretch": [
            "jquery"
        ],
        masonry: [
            "jquery"
        ],
        OpenLayers: {
            exports: "OpenLayers"
        },
        "jquery-csv": [
            "jquery"
        ]
    }
});

