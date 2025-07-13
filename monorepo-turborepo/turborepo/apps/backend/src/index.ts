import {url} from '@repo/common/index'; // always export a compiled js file in common package.json to backend because it direct use in backend dist file
console.log(url);

//you don't need to put your common or any packeges export of any folder .json file as a dependency it automatically added by turbo repo when you import it in any file like I import this url without adding it in package.json file of dependency section

//for build turborepo 
//npx create-turbo@latest
