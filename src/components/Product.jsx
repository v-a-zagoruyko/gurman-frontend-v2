import homeStart1 from "assets/img/home-start-1.jpg";

function Card(props) {
  return (
    <div class="flex flex-col rounded-[8px] bg-neutral-50">
      <img src={homeStart1} class="rounded-t-[8px]" />
      <div class="p-[8px] sm:p-[16px]">
        <p class="mb-[8px] font-oswald text-[17px] sm:text-[20px] leading-none">{props.name}</p>
        <p class="mb-[4px] text-[15px] sm:text-[17px] text-gray-500 leading-none">{props.description}</p>
        <p class="mt-auto text-[15px] sm:text-[17px] text-gray-500 text-right font-medium leading-none">
          {props.weight}, {props.price} ₽
        </p>
      </div>
    </div>
  );
}

function Row(props) {
  return (
    <div class="p-[16px] flex flex-col rounded-[8px] bg-neutral-50">
      <p class="mb-[8px] font-oswald text-[17px] sm:text-[20px] leading-none">{props.name}</p>
      <p class="mb-[4px] text-[15px] sm:text-[17px] text-gray-500 leading-none">{props.description}</p>
      <p class="mt-auto text-[15px] sm:text-[17px] text-gray-500 text-right font-medium leading-none">
        {props.weight}, {props.price} ₽
      </p>
    </div>
  );
}

export function Product() {}

Product.Card = Card;
Product.Row = Row;
