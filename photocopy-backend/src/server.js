const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const axios = require('axios');
const { url } = require('inspector');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

let salt_key = '96434309-7796-489d-8924-ab56988a6076';
let merchant_id = 'PGTESTPAYUAT86';

app.post('/order', async(req, res) => { 
    try {
        let{
            name,
            email,
            amount,
            MUID,
            transactionID

        } = req.body;
       
        const data = {
          merchantId: merchant_id,
          merchantTransactionId: transactionID,
          name: name,
          amount: amount*100,
          redirectUrl:`http://localhost:3000/status/${transactionID}`,
          redirectMode: "POST",
          email: email,
          paymentInstrument:{
            type:"PAY_PAGE"
          }
        }  

        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');

        const string = payloadMain + '/pg/v1/pay' + salt_key;

        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
       
        // checksum to be sent in header
        const checkSum = sha256 + '###' + 1;

        //api call for test
        const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"

        // requesting to phonepe

        const options = {
          method: 'POST',
          url: prod_URL,
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checkSum
          },
          data:{
            request:payloadMain
          }
        }
       
        await axios(options).then((response) => {
          console.log(response.data);
          res.send(response.data);
        }).catch((error) => {
          console.log(error.message);
          res.status(500).json({error:error.message})
        })

        
        
    } catch (error) {
        console.log(error);
    }
})

// listening server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

