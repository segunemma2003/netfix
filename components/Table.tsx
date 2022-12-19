import { CheckIcon } from '@heroicons/react/outline';
import {
  FaDesktop, FaMobile, FaTablet, FaTv,
} from 'react-icons/fa';
import { Product } from '../typings';

interface Props {
  products: Product[]
  selectedPlan: Product | null
}

function Table({ products, selectedPlan }: Props) {
  return (
    <table>
      <tbody className="divide-y divide-[gray] space-y-4">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              $
              {' '}
              {product.price}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.videoQuality}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle whitespace-nowrap place-self-start">
            Devices you can use to watch
          </td>
          {products.map((product) => (
            <td
              className={`tableDataFeature place-self-start ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.name === 'Mobile' ? (
                <div className="  flex flex-col place-content-start space-y-3">
                  <div className="flex flex-col justify-self-start items-center space-y-2">
                    <FaMobile className="inline-block h-8 w-8" />
                    <p>Phone</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <FaTablet className="inline-block h-8 w-8" />
                    <p>Tablet</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col space-y-3 items-center">

                  <div className="flex flex-col items-center space-y-2">
                    <FaMobile className="inline-block h-8 w-8" />
                    <p>Phone</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <FaTablet className="inline-block h-8 w-8" />
                    <p>Tablet</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <FaDesktop className="inline-block h-8 w-8" />
                    <p>Computer</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <FaTv className="inline-block h-8 w-8" />
                    <p>Tv</p>
                  </div>
                </div>
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
