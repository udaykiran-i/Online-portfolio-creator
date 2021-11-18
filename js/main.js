//html file path: 'portfolio-template/portfolio.html'

// variables
const submitBtn = document.getElementById('submit-btn');
var zip = new JSZip();
var varsArr = ['', 'FNAME', 'LNAME', 'TAGLINE', 'LINKEDIN-LINK', 'GITHUB-LINK', 'BIO-MATTER', 'COURSE-1', 'COLLEGE-1', 'CGPA-SCORE', 'DURATION-1', 'COURSE-2', 'COLLEGE-2', 'PERCENTAGE', 'DURATION-2', 'PROGRAMMING-LANGS', 'WEB-TECHS', 'DATABASE-TECHS', 'OTHER-TECHS', 'ACTIVITY-1', 'ACTIVITY-2', 'ACTIVITY-3', 'ACTIVITY-4', 'ACTIVITY-5', 'PROJECT-TITLE-1', 'PROJECT-TOOLS-1', 'PROJECT-CONCEPTS-1', 'PROJECT-DESC-1', 'PROJECT-GITHUB-LINK-1', 'PROJECT-TITLE-2', 'PROJECT-TOOLS-2', 'PROJECT-CONCEPTS-2', 'PROJECT-DESC-2', 'PROJECT-GITHUB-LINK-2', 'PROJECT-TITLE-3', 'PROJECT-TOOLS-3', 'PROJECT-CONCEPTS-3', 'PROJECT-DESC-3', 'PROJECT-GITHUB-LINK-3', 'EMAIL', 'NUMBER', 'ADDRESS'];


submitBtn.addEventListener('click', function () {
    jQuery.get('portfolio-template/portfolio.html', function (data) {
        let htmlCode = data;
        for (let i = 1; i < 42; i++) {
            var str;
            if (i < 10) {
                str = '0' + i.toString();
            }
            else {
                str = i.toString();
            }
            htmlCode = htmlCode.replace(varsArr[i], document.getElementById('validationDefault' + str).value);
        }
        zip.file("index.html", htmlCode);
    });

    jQuery.get('portfolio-template/portfolio.js', function (data) {
        zip.file("portfolio.js", data);
    });

    jQuery.get('portfolio-template/main.css', function (data) {
        zip.file("main.css", data);
    });

    setTimeout(function () {
        zip.generateAsync({
            type: "base64"
        }).then(function (content) {
            window.location.href = "data:application/zip;base64," + content;
        });
    }, 1000);

    
});
