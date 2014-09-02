<?php get_header(); ?>
<body>
        <div id="logo">
        </div>
        <div id="content">
        <h1><?php 
    echo $cloudTitle;
    $database = get_cloudTitle();
            
            ?>

        </div>
        <!--JAVASCRIPT-->
        <script src="js/d3.js"></script>
        <script src="js/js-add2home.js"></script>
        <script src="js/js-main.js"></script>
        <script>
            function wordCloudSize($SpecimenCount) {
            var specSize;
                if (specCount[$SpecimenCount] <= 100) {
                    specSize = 1
                } else if (specCount[$SpecimenCount] <= 500) {
                    specSize = 2
                } else if (specCount[$SpecimenCount] <= 1000) {
                    specSize = 3
                } else if (specCount[$SpecimenCount] <= 5000) {
                    specSize = 4
                } else if (specCount[$SpecimenCount] <= 10000) {
                    specSize = 5
                } else if (specCount[$SpecimenCount] <= 50000) {
                    specSize = 6
                } else if (specCount[$SpecimenCount] <= 100000) {
                    specSize = 7
                } else if (specCount[$SpecimenCount] <= 200000) {
                    specSize = 8
                } else if (specCount[$SpecimenCount] <= 300000) {
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