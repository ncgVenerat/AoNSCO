
    <script>
        var specOrder = [
                "Anoplura",
                "Archaeognatha",
                "Blattodea",
                "Coleoptera",
                "Dermaptera",
                "Diptera",
                "Embioptera",
                "Ephemeroptera",
                "Grylloblattodea",
                "Hemiptera",
                "Hymenoptera",
                "Isoptera",
                "Lepidoptera",
                "Mallophaga",
                "Mantodea",
                "Mecoptera",
                "Megaloptera",
                "Neuroptera",
                "Odonata",
                "Orthoptera",
                "Phasmatodea",
                "Phthiraptera",
                "Plecoptera",
                "Psocoptera",
                "Raphidioptera",
                "Rhaphidioptera",
                "Siphonaptera",
                "Strepsiptera",
                "Thysanoptera",
                "Thysanura",
                "Trichoptera",
                "Undetermined",
                "Zoraptera",
        ];
        var specCount = [
                2,
                372,
                32819,
                273310,
                10746,
                252071,
                51,
                29988,
                22,
                39885,
                207286,
                2001,
                117564,
                15,
                13031,
                723,
                3629,
                3654,
                51179,
                496422,
                11935,
                1149,
                9625,
                876,
                184,
                43,
                587,
                58,
                1829,
                143,
                64315,
                41171,
                1
        ];
        
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

        d3.layout.cloud().size([450, 450])
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
            return~~ (Math.random() * 6) * 30;
        })
            .font('Impact')
            .fontSize(function(d) {
            return d.size;
        })
            .on("end", draw)
            .start();

        function draw(words) {
            d3.select("body").append("svg")
                .attr("width", 700)
                .attr("height", 700)
                .append("g")
                .attr("transform", "translate(150,150)")
                .selectAll("text")
                .data(words)
                .enter().append("text")
                .style("font-size", function(d) {
                return (d.size * 4.5) + "px";
            })
                .style("font-family", 'Impact')
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