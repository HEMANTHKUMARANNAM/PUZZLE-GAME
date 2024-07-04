
n =3;

function startgame()
{
    // var tiles_html ='';
    // n =5;

    // for(var i=1; i<=n*n ; i++)
    // {
    //     tiles_html += '<div class="grid-item" onclick="handleItemClick(' +i+')" id="'+i+'" >'+ i+'</div>';
    // }


    // document.getElementById("game_table").childNodes = tiles_html;




    var mydiv = document.getElementById('game_table');
    random_fun();
    mydiv.classList.toggle("enable");
    var mydivstart = document.getElementById('startdiv');
    mydivstart.classList.toggle("disable");
    var mydivend = document.getElementById('enddiv');
    mydivend.classList.toggle("enable");
}

function endgame()
{
    var mydivstart = document.getElementById('startdiv');
    mydivstart.classList.toggle("disable");
    var mydivend = document.getElementById('enddiv');
    mydivend.classList.toggle("enable");
    var mydiv = document.getElementById('game_table');
    mydiv.classList.toggle("enable");
}

upperrow = []
lowerrow = []
rightrow = []
leftrow = []

// n= 3;

for( var i=1 ; i<= n ; i++)
{
    upperrow.push(i);
    lowerrow.push( n*(n-1) + i);
    rightrow.push( n*i);
    leftrow.push( n*(i-1) + 1);
}

console.log(upperrow, lowerrow, rightrow, leftrow)

async function handleItemClick(index) {
    var myDiv = document.getElementById(index);
    // alert("Item " + index + " clicked!" );


    // up check
    if(  upperrow.indexOf(index) == -1 )
    {
        var upDiv = document.getElementById(index-n);
        if( upDiv.textContent === "" )
        {
            temp = upDiv.textContent;
            upDiv.textContent = myDiv.textContent;
            myDiv.textContent = temp;
        }
        
    }

    // down check
    if(  lowerrow.indexOf(index) == -1 )
    {
        var upDiv = document.getElementById(index+n);
        if( upDiv.textContent === "" )
        {
            temp = upDiv.textContent;
            upDiv.textContent = myDiv.textContent;
            myDiv.textContent = temp;
        }
    }


    // right check
    if(  rightrow.indexOf(index) == -1 )
    {
        var upDiv = document.getElementById(index+1);
        if( upDiv.textContent === "" )
        {
            temp = upDiv.textContent;
            upDiv.textContent = myDiv.textContent;
            myDiv.textContent = temp;
        }
    }


    // left check
    if(  leftrow.indexOf(index) == -1 )
    {
        var upDiv = document.getElementById(index-1);
        if( upDiv.textContent === "" )
        {
            temp = upDiv.textContent;
            upDiv.textContent = myDiv.textContent;
            myDiv.textContent = temp;
        }
    }
    await sleep(3000);
    game_win_check();



}


currentindex = n*n;

function random_fun()
{

    for(var i=0; i<2000; i++)
    {
        option = "hold";

        var num = Math.random();
        if( num <0.25)
        {
            option = "up";
        }
        else if( num <0.5)
        {
            option = "down";
        }
        else if( num <0.75)
        {
            option = "left";
        }
        else
        {
            option = "right";
        }

        //move up
        if( option === "up" )
        {
            if(  upperrow.indexOf(currentindex) === -1 )
            {
                console.log(upperrow.indexOf(currentindex) + " " + currentindex);
                var upDiv = document.getElementById(currentindex-n);
                var current = document.getElementById(currentindex);
                current.textContent= upDiv.textContent;
                upDiv.textContent="";
                currentindex = currentindex-n;
            }
            
        }

        // mov down
        if( option === "down" )
        {
            if(  lowerrow.indexOf(currentindex) === -1 )
            {
                console.log(lowerrow.indexOf(currentindex) + " " + currentindex);
                var downDiv = document.getElementById(currentindex+n);
                var current = document.getElementById(currentindex);
                current.textContent= downDiv.textContent;
                downDiv.textContent="";
                currentindex = currentindex+n;
            }
        }

        // move right
        if( option === "right" )
        {
            if(  rightrow.indexOf(currentindex) === -1 )
            {
                console.log( rightrow.indexOf(currentindex) + " " + currentindex);
                var rightDiv = document.getElementById(currentindex+1);
                var current = document.getElementById(currentindex);
                current.textContent= rightDiv.textContent;
                rightDiv.textContent="";
                currentindex = currentindex+1;
            }
        }

        // move left
        if( option === "left" )
        {
            if(  leftrow.indexOf(currentindex) === -1 )
            {
                console.log(leftrow.indexOf(currentindex) + " " + currentindex );
                var leftDiv = document.getElementById(currentindex-1);
                var current = document.getElementById(currentindex);
                current.textContent= leftDiv.textContent;
                leftDiv.textContent="";
                currentindex = currentindex-1;
            }
        }

        console.log(option + " done");
    }

}


function game_win_check() 
{
    var test = true; 
    for(var index = 1 ; index <n*n ; index++)
    {
        var myDiv = document.getElementById(index);
        if(myDiv.textContent != index.toString() )
        {
            test = false;
        }
    }
    var myDiv = document.getElementById(n*n);

    if(myDiv.textContent != "")
    {
        test=false;
    }

    if(test === true)
    {
        alert("Game win");
        endgame();
    }

}






function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
