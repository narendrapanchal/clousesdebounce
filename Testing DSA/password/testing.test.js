const {validation}= require(`./password`);
test("Chekck validation 1",()=>{
expect(validation("1234qw#@ertQW")).toEqual("Valid Password");
});
test("Chekck validation 2",()=>{
    expect(validation("qw#@ertQW")).toEqual("No number");
    });
    test("Chekck validation 3",()=>{
        expect(validation("1234qwertQW")).toEqual("No special later");
        });
        test("Chekck validation 4",()=>{
            expect(validation("1234qw#@ert")).toEqual("No capital later");
            })
            test("Chekck validation 5",()=>{
                expect(validation("1234#@QW")).toEqual("No small later");
                })
                test("Chekck validation 6",()=>{
                    expect(validation("1234qw#@ertQW")).toEqual("Valid Password");
                    });
                    test("Chekck validation 7",()=>{
                        expect(validation("qw#@ert")).toEqual("No capital later No number");
                        });
                        test("Chekck validation 8",()=>{
                            expect(validation("qwertQW")).toEqual("No special later No number");
                            });
                            test("Chekck validation 9",()=>{
                                expect(validation("1234qert")).toEqual("No capital later No special later");
                                })
                                test("Chekck validation 10",()=>{
                                    expect(validation("1234#@")).toEqual("No capital later No small later");
                                    })                