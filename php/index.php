<?php include 'header.php'; ?>
<body>
        <div id="logo">
        </div>
        <div id="content">
        
        <h1 class="displayTitle">
            <?php echo 'placeholder title'; ?>
        </h1>
        <div id="WC"></div>
        </div>
        <!--JAVASCRIPT-->
        <script src="../js/d3.js"></script>
        <script src="../js/js-add2home.js"></script>
        <script src="../js/d3.layout.cloud.js"></script>
        <script>
            <?php 
            $dsn ='mysql:host=localhost;dbname=AoNS_Coop';
            $host = 'localhost';
            $username ='nviiigil';
            $password ='Duskado0!';
            
            $connection = mysql_connect($host, $username, $password);
        if ($connection) {
            //echo 'this works';
            mysql_select_db('AoNS_Coop');
            $cloud = 'Insecta_WC';//get_cloudTitle();
            $query = "SELECT * FROM $cloud";
            $result = mysql_query($query);
            $rowsGot = mysql_numrows($result);
            
            echo "
                var specOrder= []; \n
                var specCount= []; \n
                ";
            for ($rownum=0; $rownum < $rowsGot; $rownum++){
            $row=mysql_fetch_row($result);
            echo "specOrder[$rownum] = '$row[0]';\n
                 specCount[$rownum] = '$row[1]';\n";
            }
        }
            ?>
            
            function wordCloudSize(i) {
            var specSize;
                if (specCount[i] <= 100) {
                    specSize = 1
                } else if (specCount[i] <= 500) {
                    specSize = 2
                } else if (specCount[i] <= 1000) {
                    specSize = 3
                } else if (specCount[i] <= 5000) {
                    specSize = 4
                } else if (specCount[i] <= 10000) {
                    specSize = 5
                } else if (specCount[i] <= 50000) {
                    specSize = 6
                } else if (specCount[i] <= 100000) {
                    specSize = 7
                } else if (specCount[i] <= 200000) {
                    specSize = 8
                } else if (specCount[i] <= 300000) {
                    specSize = 9
                } else {
                    specSize = 10
                }
            return specSize;
        }
        
        
        
        var fill = d3.scale.category20();

        d3.layout.cloud().size([800, 700])
            .words(
            specOrder
            .map(function(d, i) {
            return {
                text: d,
                size: wordCloudSize(i)
            };
        }))
            .padding(5)
            .rotate(function() {
            return~~ 0;
        })
            .font('Trajan Pro')
            .fontSize(function(d) {
            return d.size;
        })
            .on("end", draw)
            .start();

        function draw(words) {
            d3.select("#WC").append("svg")
                .attr("width", 700)
                .attr("height", 700)
                .append("g")
                .attr("transform", "translate(150,150)")
                .selectAll("text")
                .data(words)
                .enter().append("text")
                .style("font-size", function(d) {
                return (d.size * 4 + 10) + "px";
            })
                .style("font-family", 'Trajan Pro')
                .style("fill", function(d, i) {
                return fill(i);
            })
                .attr("text-anchor", "middle")
                .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
                .text(function(d) {
                return d.text;
            });
        }
        </script>
    </body>
</html>