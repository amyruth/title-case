describe("titleCase", function(){
	it('capitalizes the first letter of a word', function(){
		titleCase("cat").should.equal("Cat");
	});

	it('capitalizes all the words in a sentence', function(){
		titleCase("the sky is blue").should.equal("The Sky Is Blue");
	});

	it('converts and all caps sentence to title case', function(){
		titleCase("THIS IS MY MAN!").should.equal("This Is My Man!");
	});
});
