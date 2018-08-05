describe("Controller test", function() {
    
    beforeEach(function() {
     
    });
  
    it("should be able to fetch user data", function() {
        const sampleid = 'benevbright';
        userModel.searchUser(sampleid).then(function(data){
            let datalogin = data.login;
            expect(datalogin).toBeDefined();
        }); 
 
      //demonstrates use of custom matcher
    
    });
});