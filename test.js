const request_url = require("supertest")("https://dummyjson.com");
const assert = require("chai").expect;

describe("All product get with this API", function () {
  it("Get single product with object response", async function () {

    const response = await request_url
      .get('/products/1')
      
    assert(response.statusCode).to.eql(200);
    assert(response.body.title).to.eql('iPhone 9')
   
  });
});



describe("Create product with this API", function () {
    it("Create new product", async function () {
      const response = await request_url
        .post('/products/add')
        .set('Content-Type', 'application/json')
        .send({
            title: 'Bymax Car',
          });

        assert(response.statusCode).to.eql(200);
        assert(response.body.title).to.eql('Bymax Car')
    });
  });
  
  describe("Update product data with this API", function () {
    it("Update product's data", async function () {
  
      const response = await request_url
        .put('/products/1')
        .set('Content-Type', 'application/json')
        .send({
            title: 'iPhone Galaxy Test'
          });

        assert(response.statusCode).to.eql(200);
        assert(response.body).to.be.an('object');
        assert(response.body.title).to.eql('iPhone Galaxy Test')
    });
  });