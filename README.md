# pinata-submarine-sdk-starter

This is a quick repo that allows users to quick start testing the Submarine SDK! 

## Installation and Setup
You will need to have node.js installed. Next clone the repo and install the dependencies.

```git clone https://github.com/stevedsimkins/pinata-submarine-sdk-starter && cd pinata-submarine-sdk-starter && npm install```

After that, cd into the directory and create a .env file in the root of the folder:

```touch .env```

Open the .env file and add in your [Pinata Submarine Key](https://knowledge.pinata.cloud/en/articles/6191471-how-to-create-an-pinata-api-key) and your [Dedicated Gateway](https://app.pinata.cloud/gateway) with the format below:

```
SUBMARINE_KEY=REPLACE_THIS_WITH_YOUR_PINATA_SUBMARINE_KEY
GATEWAY=https://yourgateway.mypinata.cloud //Replace this with your Dedicated Gateway
```

## Test it! 

From there you can try the first call in the terminal using ```node uploadFileOrFolder.js```. After that you can open any of the API calls, make adjustments and use ```node name_of_file.js``` to run the API command!

If you have any questions please send an email to [team@pinata.cloud](mailto:team@pinata.cloud)!
