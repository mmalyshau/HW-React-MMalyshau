import { productClass } from "@lib/productClass";

export async function fetchItems() {
  try {
    const reply = await fetch(
      "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
    );

    if (!reply.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await reply.json();
    const items = data.map(
      (item) =>
        new productClass(
          item.id,
          item.meal,
          item.category,
          item.area,
          item.instructions,
          item.img,
          item.price
        )
    );
    return items;
  } catch (error) {
    throw new Error("Failed to fetch products", error);
  }
}
