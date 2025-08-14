import { cn } from "@/lib/utils";


const ProductPrice = ({ value, className }: {value: number; className ?: string;}) => {

//Ensure twwo decimal places

const stringValue = value.toFixed(2); //Used to specify how many decimal values that we want.
// Get the int/float
const [intValue, floatValue] = stringValue.split(".");



    return ( <p className={ cn("text-2xl", className)}>
        <span className="text-xs align-super">$</span>
        {intValue}
        <span className="text-xs align-super">.{floatValue}</span>
    </p> );
}
 
export default ProductPrice;