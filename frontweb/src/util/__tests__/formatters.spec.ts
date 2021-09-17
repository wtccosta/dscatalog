import { formatPrice } from "util/formatters";

test('formatPrice should format number pt-BR when given 10.1', () => {


    //ARANGE:
    const value = 10.1;

    //ACTION
    const result = formatPrice(value);
    
    //ASSERT
    expect(result).toEqual("10,10");
})