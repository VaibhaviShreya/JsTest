/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const arr=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_eyeColor,_shirtType,_bling,_hairColor) {
 const info={
    "name":_name,
    "eyeColor":_eyeColor,
    "shirtType":_shirtType,
    "bling":_bling,
    "hairColor":_hairColor
 }
arr.push(info);
console.log("Minted :-" + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log( "\n total number of NFT: " + arr.length);
}

// call your functions below this line
mintNFT("Vaibhavi","black","kurti","goldchain","brown");
mintNFT("Saksham ","blue","hoddie","Watch","white");
mintNFT("Preeti","hazel","shirt","bracelet","wine");
listNFTs();
getTotalSupply();
