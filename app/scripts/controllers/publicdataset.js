'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:PublicdatasetCtrl
 * @description
 * # PublicdatasetCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('PublicdatasetCtrl', ['$location', '$anchorScroll', function ($location, $anchorScroll) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.publicdatasets = [{'name':'Open Street Map', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'1000 Cannabis Genomes Project', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Chicago Crime Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Bay Area Bike Share Trips Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'GDELT Books Corpus', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'GitHub Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Hacker News', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Healthcare Common Procedure Coding System (HCPCS) Level II', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Medicare', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Major League Baseball', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'IRS 990 Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'NOAA GHCN Weather', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'NOAA GSOD Weather', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'NYC 311 Service Requests', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'NYC Citi Bike Trips', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'NYC TLC Trips', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'NYPD Motor Vehicle Collisions', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Open Images', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'San Francisco 311 Service Requests Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'San Francisco Fire Department Service Calls Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'San Francisco Police Reports Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'San Francisco Street Trees Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Stack Overflow', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'USA Bureau of Labor Statistics', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'United States Census Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'United States Census Bureau International Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'USA Disease Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'GitHub code Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Books Corpus', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Bike Share Trips Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Disease Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Bureau International Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Census Data', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'Sample Tables 2', 'description': 'This dataset contains Open Street Maps'},
                           {'name':'USA Names Data 3', 'description': 'This dataset contains USA Names'},
                           {'name':'Disease Data 2', 'description': 'This dataset contains Disease Data'}];

    this.publicdatasetsAll = ['Open Street Map', '1000 Cannabis Genomes Project','Chicago Crime Data',
                           'Bay Area Bike Share Trips Data','GDELT Books Corpus','GitHub Data',
                           'Hacker News','Healthcare Common Procedure Coding System (HCPCS) Level II',
                           'IRS 990 Data','Major League Baseball','Medicare',
                           'NOAA GHCN Weather','NOAA GSOD Weather','NYC 311 Service Requests',
                           'NYC Citi Bike Trips','NYC TLC Trips','NYC Tree Census',
                           'NYPD Motor Vehicle Collisions','Open Images','San Francisco 311 Service Requests Data',
                           'San Francisco Fire Department Service Calls Data','San Francisco Police Reports Data',
                           'San Francisco Street Trees Data','Stack Overflow','USA Bureau of Labor Statistics',
                           'United States Census Data','United States Census Bureau International Data','USA Disease Data',
                           'USA Names Data','Sample Tables', 'USA Names Data 3','Sample Tables 2',
                           'Census Data','Bureau International Data','Disease Data',
                           'Bike Share Trips Data','Books Corpus','GitHub code Data'];

    this.publicdatasetsRate = ['1000 Cannabis Genomes Project','Chicago Crime Data',
                            'Open Street Map','GDELT Books Corpus','GitHub Data',
                            'Hacker News','Healthcare Common Procedure Coding System (HCPCS) Level II',
                            'IRS 990 Data','Major League Baseball','Medicare'];

    this.publicdatasetsDownload = ['San Francisco Fire Department Service Calls Data','San Francisco Police Reports Data',
                           'San Francisco Street Trees Data','Stack Overflow','USA Bureau of Labor Statistics',
                           'United States Census Data','United States Census Bureau International Data','USA Disease Data',
                           'USA Names Data','Open Street Map'];

    this.publicdatasetsNew = ['Open Street Map','Major League Baseball','Medicare',
                            'NOAA GHCN Weather','NOAA GSOD Weather','NYC 311 Service Requests',
                            'NYC Citi Bike Trips','NYC TLC Trips','NYC Tree Census',
                            'NYPD Motor Vehicle Collisions'];

    this.comments = [{'name': 'DarkCubes', 'date': '2017-06-05T11:01:31.137Z', 'message': 'A data set (or dataset) is a collection of data. Most commonly a data set corresponds to the contents of a single database table, or a single statistical data matrix, where every column of the table represents a particular variable, and each row corresponds to a given member of the data set in question.'},
                     {'name': 'LightCubes', 'date': '2017-04-05T11:01:31.137Z', 'message': 'I just made a comment about this dataset'},
                     {'name': 'GrayCubes', 'date': '2017-02-05T11:01:31.137Z', 'message': '@DarkCubes I do not think that is a thing.'},
                     {'name': 'BlueCubes', 'date': '2017-01-05T11:01:31.137Z', 'message': 'I just made a comment about this dataset <a href="www.kth.se">www.kth.se</a>'},
                     {'name': 'RedCubes', 'date': '2016-06-05T11:01:31.137Z', 'message': 'Are you sure @LightCubes'},
                     {'name': 'YellowCubes', 'date': '2015-06-05T11:01:31.137Z', 'message': '<span onmouseover="this.textContent=\'PWN3D!\'">Is <i>anyone</i> reading this?</span>'}];

    this.gotoComment = function () {
      var old = $location.hash();
      $location.hash('commentbtn');
      $anchorScroll();
      $location.hash(old);
    }
    this.init = function () {
      $('.keep-open').on({
          'shown.bs.dropdown': function() { $(this).attr('closable', false); },
          'click':             function() { },
          'hide.bs.dropdown':  function() { return $(this).attr('closable') === 'true'; }
      });

      $('.keep-open #dLabel').on({
        'click': function() {
          console.log('foo');
          $(this).parent().attr('closable', true );
        }
      });
      $(window).scroll(function(){
          $('#publicdataset').css({
              'top': $(this).scrollTop() + 90
          });
      });
    };
    this.init();

    this.selectCategory = function (category, selectedDsList) {
      this.selected = undefined;
      this.category = category;
      this.selectedDsList = selectedDsList;
    };

    this.readme = '<p><img src=\"https:\/\/www.cyclestreets.net\/blog\/wp-content\/uploads\/openstreetmap.jpg\" alt=\"OSM\" \/><\/p>\r\n\r\n<p><strong>From: 30th March 2017<\/strong><\/p>\r\n\r\n<h1 id=\"openstreetmap\">Open Street Map<\/h1>\r\n\r\n<p>This dataset contains Open Street Maps in the following formats:<\/p>\r\n\r\n<ul>\r\n<li>.osm (~750GB)<\/li>\r\n\r\n<li>parquet<\/li>\r\n<\/ul>\r\n\r\n<p>We converted the .osm file to parquet using osm-parquetizer [1].<\/p>\r\n\r\n<h2 id=\"parquetusageforzeppelinbyadrianbona\">Parquet Usage for Zeppelin (by Adrian Bona)<\/h2>\r\n\r\n<hr \/>\r\n\r\n<p>Some notes on how to use the Parquet file follows.<\/p>\r\n\r\n<h3 id=\"registertheparquetfilesassparksqltablesinzeppelin\">Register the parquet files as Spark SQL tables in Zeppelin<\/h3>\r\n\r\n<hr \/>\r\n\r\n<pre><code class=\"scala language-scala\">%spark\r\nval nodeDF = sqlContext.read.parquet(\"file:\/tmp\/osm\/romania-latest.osm.pbf.node.parquet\")\r\nnodeDF.createOrReplaceTempView(\"nodes\")\r\n\r\nval wayDF = sqlContext.read.parquet(\"file:\/tmp\/osm\/romania-latest.osm.pbf.way.parquet\")\r\nwayDF.createOrReplaceTempView(\"ways\")\r\n\r\nval relationDF = sqlContext.read.parquet(\"file:\/tmp\/osm\/romania-latest.osm.pbf.relation.parquet\")\r\nrelationDF.createOrReplaceTempView(\"relations\")\r\n<\/code><\/pre>\r\n\r\n<h3 id=\"sparksqlinzeppelin\">SparkSQL in Zeppelin<\/h3>\r\n\r\n<hr \/>\r\n\r\n<pre><code class=\"sql language-sql\">%sql \r\nselect * from nodes\r\n\r\n%sql \r\nselect * from ways\r\n\r\n%sql\r\nselect * from relations\r\n<\/code><\/pre>\r\n\r\n<h3 id=\"top10usersbasedonnodecount\">Top 10 users based on node count?<\/h3>\r\n\r\n<hr \/>\r\n\r\n<pre><code class=\"sql language-sql\">%sql \r\nselect user_sid, count(*) as node_count from nodes group by user_sid order by node_count desc limit 10\r\n<\/code><\/pre>\r\n\r\n<h3 id=\"nodecountevolutionfortop10activeusers\">Node count evolution for top 10 active users?<\/h3>\r\n\r\n<hr \/>\r\n\r\n<pre><code class=\"sql language-sql\">%sql\r\nselect \r\n    user_sid, \r\n    year(from_unixtime(timestamp \/ 1000)) as year,\r\n    count(*) as node_count\r\nfrom \r\n    nodes\r\nwhere \r\n    user_sid in (select user_sid from (select user_sid, count(*) as c from nodes group by user_sid order by c desc limit 10))\r\n    and \r\n    year(from_unixtime(timestamp \/ 1000)) &gt; 2010\r\ngroup by \r\n    user_sid, \r\n    year(from_unixtime(timestamp \/ 1000))\r\norder by \r\n    year\r\n<\/code><\/pre>\r\n\r\n<h3 id=\"aboundingboxtheroadgeometriesnodeswithwaysjoin\">A bounding box, the road geometries? (nodes with ways join)<\/h3>\r\n\r\n<hr \/>\r\n\r\n<pre><code class=\"scala language-scala\">import org.apache.spark.sql.functions._\r\n\r\nval wayNodeDF = wayDF\r\n  .filter(array_contains($\"tags.key\", \"highway\"))\r\n  .select($\"id\".as(\"wayId\"), $\"user_sid\", explode($\"nodes\").as(\"indexedNode\"))\r\n\r\nval nodeLatLonDF = nodeDF\r\n  .filter($\"latitude\" &lt; 46.85 and $\"latitude\" &gt; 46.67 and $\"longitude\" &lt; 23.73 and $\"longitude\" &gt; 23.38)\r\n  .select($\"id\".as(\"nodeId\"), $\"latitude\", $\"longitude\")\r\n\r\nval wayGeometryDF = wayNodeDF.join(nodeLatLonDF, $\"indexedNode.nodeId\" === $\"nodeId\")\r\n  .groupBy($\"wayId\", $\"user_sid\")\r\n  .agg(collect_list(struct($\"indexedNode.index\", $\"latitude\", $\"longitude\")).as(\"geometry\"))\r\n\r\nwayGeometryDF.createOrReplaceTempView(\"wayGeometry\")\r\n<\/code><\/pre>\r\n\r\n<pre><code class=\"sql language-sql\">%sql\r\nselect * from wayGeometry\r\n<\/code><\/pre>\r\n\r\n<h3 id=\"thegeometrycolumnaswktusingjts\">The geometry column as WKT? (using JTS)<\/h3>\r\n\r\n<hr \/>\r\n\r\n<pre><code class=\"scala language-scala\">import com.vividsolutions.jts.io.WKTWriter\r\nimport com.vividsolutions.jts.geom.{Coordinate, Geometry, GeometryFactory}\r\n\r\ncase class IndexedNode(index: Int, coord: Coordinate)\r\n\r\ndef nodesToWKT(nodes: Seq[Row]): String = {\r\n    val indexedCoords = nodes.map { \r\n      case Row(index: Int, lat: Double, lon:Double) =&gt; IndexedNode(index, new Coordinate(lon, lat))\r\n    }\r\n    val coords = indexedCoords.sortBy(_.index).map(_.coord).toArray\r\n    new WKTWriter().write(new GeometryFactory().createLineString(coords))\r\n}\r\n\r\nval wkt = udf {\r\n  (nodes: Seq[Row]) =&gt; nodesToWKT(nodes)\r\n}\r\n\r\nval wayWKTDF = wayGeometryDF\r\n  .filter(size($\"geometry\") &gt; 1)\r\n  .select($\"wayId\", $\"user_sid\", wkt($\"geometry\").as(\"geometry\"))\r\nwayWKTDF.createOrReplaceTempView(\"wayWKT\")\r\n<\/code><\/pre>\r\n\r\n<pre><code class=\"sql language-sql\">%sql\r\nselect * from wayWKT\r\n<\/code><\/pre>\r\n\r\n<h3 id=\"whomapswherewktgeometriesoncartocom\">Who maps where? (WKT geometries on carto.com)<\/h3>\r\n\r\n<hr \/>\r\n\r\n<pre><code class=\"javascript language-javascript\">displayHTML(\"&lt;iframe width=\\\"100%\\\" height=\\\"520\\\" frameborder=\\\"0\\\" src=\\\"https:\/\/adrianulbona.carto.com\/viz\/b4a276e6-c47b-11e6-8ea3-0e3ff518bd15\/embed_map\\\" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen&gt;&lt;\/iframe&gt;\")\r\n<\/code><\/pre>\r\n\r\n<p>References<\/p>\r\n\r\n<ul>\r\n<li>[0] http:\/\/wiki.openstreetmap.org\/wiki\/OSM<em>file<\/em>formats<\/li>\r\n\r\n<li>[1] http:\/\/wiki.openstreetmap.org\/wiki\/Osm-parquetizer<\/li>\r\n\r\n<li>[2] https:\/\/github.com\/adrianulbona\/osm-parquetizer<\/li>\r\n\r\n<li>[3] http:\/\/adrianulbona.github.io\/2016\/12\/18\/osm-parquetizer.html<\/li>\r\n<\/ul>';
  }]);
