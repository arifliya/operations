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

                // TO DISPLAY NUMBERS ON THE DASHBOARD //

                // var failed = document.getElementById("failedSubmissions");
                // failed.innerHTML +=  [ data[0].failed ] ;
                //
                // var failedBox = document.getElementById("failedBox");
                //
                // if ( [ data[0].failed ] > 0 ) {
                //     failedBox.classList.add("show");
                // }
                //
                //
                // var overRunning = document.getElementById("overRunning");
                // overRunning.innerHTML +=  [ data[0].overrunning ] ;
                //
                // var overRunning = document.getElementById("overrunBox");
                //
                // if ( [ data[0].overrunning ] > 0 ) {
                //     overRunning.classList.add("show");
                // }





                var firstDonut = document.getElementById("firstDonut");
                firstDonut.innerHTML =+  [ data[0].processing ] ;

                var first = document.getElementById("first");
                first.setAttribute('stroke-dasharray', firstDonut.innerHTML + ',100');

                  if ( [ data[0].processin ] > 50 ) {
                      first.classList.add("warning");
                  }
                  if ( [ data[0].processin ] > 70 ) {
                      first.classList.add("danger");
                  }




                var secondDonut = document.getElementById("secondDonut");
                secondDonut.innerHTML =+  [ data[0].queued ] ;

                var second = document.getElementById("second");
                second.setAttribute('stroke-dasharray', secondDonut.innerHTML + ',100');

                  if ( [ data[0].queued ] > 25 ) {
                      second.classList.add("warning");
                  }

                  if ( [ data[0].queued ] > 50 ) {
                      second.classList.add("danger");
                  }



                var thirdDonut = document.getElementById("thirdDonut");
                thirdDonut.innerHTML =+  [ data[0].submissions ] ;

                var third = document.getElementById("third");
                third.setAttribute('stroke-dasharray', thirdDonut.innerHTML + ',100');

                  if ( [ data[0].submissions ] > 15 ) {
                      third.classList.add("warning");
                  }

                  if ( [ data[0].submissions ] > 25 ) {
                      third.classList.add("danger");
                  }

}
