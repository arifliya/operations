var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1nEcJlYenlxrSpjIqy6DI6Bw7EfjMmc0XeHXR6R-Bhi8/edit?usp=sharing';

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {
  alert('Successfully processed!')
  console.log(data);
}

window.addEventListener('DOMContentLoaded', init)


function showInfo(data, tabletop) {

                // FOR DISPLAYING IMAGES FROM CDN INTO LANDING PAGE //

                // var failed = document.getElementById("failedSubmissions");
                // failed.innerHTML +=  [ data[0].failed ] ;
                //
                // var overRunning = document.getElementById("overRunning");
                // overRunning.innerHTML +=  [ data[0].overrunning ] ;

                document.getElementById("failedSubmissions").innerHTML = [ data[0].failed ] ;

                document.getElementById("overRunning").innerHTML = [ data[0].overrunning ] ;

    
  }
