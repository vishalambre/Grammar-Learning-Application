
function negate(){
var temp=document.getElementById("inputnegate").value;
var doc = nlp(temp)
var s=doc.sentences().toNegative().out('text')
document.getElementById("negate").innerHTML = s;
}

function positive(){
var temp=document.getElementById("inputtopositive").value;
var doc = nlp(temp)
var s=doc.sentences().toPositive().out('text')
document.getElementById("positive").innerHTML = s;
}

function toFuture(){

var temp=document.getElementById("inputtofuture").value; 	
var doc = nlp(temp)
var s = doc.sentences().toFutureTense().out('text')
document.getElementById("future").innerHTML = s;
  }

 function toPast(){

var temp=document.getElementById("inputtopast").value; 	
var doc = nlp(temp)
var s = doc.sentences().toPastTense().out('text')
document.getElementById("past").innerHTML = s;
  }


  function toPlural(){

var temp=document.getElementById("inputtopluralrize").value; 	
var doc = nlp(temp)
var s = doc.nouns().toPlural().out('text')
document.getElementById("plural").innerHTML = s;
  }

  function toSingular(){

var temp=document.getElementById("inputtosingular").value; 	
var doc = nlp(temp)
var s = doc.nouns().toSingular().out('text')
document.getElementById("singular").innerHTML = s;
  }

  function toadverb(){

var temp=document.getElementById("inputtopos").value; 	
var doc = nlp(temp)
var s = doc.adverbs().out('text')
document.getElementById("adverb").innerHTML = s;
  }

  function toadjective(){

var temp=document.getElementById("inputtopos").value; 	
var doc = nlp(temp)
var s = doc.adjectives().out('text')
document.getElementById("adverb").innerHTML = s;
  }

  function toverb(){

var temp=document.getElementById("inputtopos").value; 	
var doc = nlp(temp)
var s = doc.verbs().out('text')
document.getElementById("adverb").innerHTML = s;
  }

  function tonoun(){

var temp=document.getElementById("inputtopos").value; 	
var doc = nlp(temp)
var s = doc.nouns().out('text')
document.getElementById("adverb").innerHTML = s;
  }

function torhyme(){

	var temp = document.getElementById("inputtorhymes").value; 
	var doc = RiTa.rhymes(temp);
	document.getElementById("rhyme").innerHTML = doc;
}

function tosyllables(){

	var temp = document.getElementById("inputtosyllables").value; 
	var doc = RiTa.getSyllables(temp);
	document.getElementById("syllables").innerHTML = doc;
}

function tocontractions(){

	var temp = document.getElementById("inputtocontract").value; 
	var doc = nlp(temp);
	var s = doc.contractions().contract().out('text')
	document.getElementById("contractions").innerHTML = s;

}

function toexpansions(){

	var temp = document.getElementById("inputtocontract").value; 
	var doc = nlp(temp);
	var s = doc.contractions().expand().out('text')
	document.getElementById("contractions").innerHTML = s;

}

function tostem(){

	var temp = document.getElementById("inputtostem").value; 
	var doc = RiTa.stem(temp);
	document.getElementById("stem").innerHTML = doc;
}

// function topos(){

// 	var temp = document.getElementById("inputtopos").value; 
// 	var doc = RiTa.getPosTags(temp);
	
// 	for (var i in doc){

// 		var a = i;
// 		console.log(a);
// 	}
// 	//document.getElementById("pos").innerHTML = doc;
// }



