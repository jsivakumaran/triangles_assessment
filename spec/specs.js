describe('triangles', function(){
  it("returns false for dimensions that do not form a triangle", function(){
    expect(triangle(2, 2, 8)).to.equal("false");
  });
  it("returns equilateral when all sides are equal", function(){
    expect(triangle(3,3,3)).to.equal("isosceles");
  });
});
