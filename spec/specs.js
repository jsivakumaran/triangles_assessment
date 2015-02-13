describe('triangles', function(){
  it("returns false for dimensions that do not form a triangle", function(){
    expect(triangle(2, 2, 8)).to.equal("false");
  });
  it("returns equilateral when all sides are equal", function(){
    expect(triangle(3,3,3)).to.equal("equilateral");
  });
  it("returns isosceles when exactly two sides are equal", function(){
    expect(triangle(2,2,3)).to.equal("isosceles");
  });
  it("returns scalene when no sides are equal", function(){
    expect(triangle(4,5,6)).to.equal("scalene");
  });
});
