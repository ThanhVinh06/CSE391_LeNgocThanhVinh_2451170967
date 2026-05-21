function createCart() {

    // Private data
    let items = [];

    let discount = {
        type: null,
        value: 0
    };

    return {

        addItem(product, quantity = 1) {

            const existingItem = items.find(
                item => item.id === product.id
            );

            // Nếu đã tồn tại → tăng quantity
            if (existingItem) {

                existingItem.quantity += quantity;
            }

            // Nếu chưa tồn tại
            else {

                items.push({
                    ...product,
                    quantity
                });
            }
        },

        removeItem(productId) {

            items = items.filter(
                item => item.id !== productId
            );
        },

        updateQuantity(productId, newQuantity) {

            const item = items.find(
                item => item.id === productId
            );

            if (item) {

                item.quantity = newQuantity;
            }
        },

        getTotal() {

            let total = items.reduce(

                (sum, item) =>

                    sum + (item.price * item.quantity),

                0
            );

            // SALE10
            if (discount.type === "percent") {

                total -= total * discount.value / 100;
            }

            // FREESHIP
            else if (discount.type === "fixed") {

                total -= discount.value;
            }

            return total;
        },

        applyDiscount(code) {

            switch (code) {

                case "SALE10":

                    discount = {
                        type: "percent",
                        value: 10
                    };

                    break;

                case "SALE20":

                    discount = {
                        type: "percent",
                        value: 20
                    };

                    break;

                case "FREESHIP":

                    discount = {
                        type: "fixed",
                        value: 30000
                    };

                    break;

                default:

                    console.log("Mã giảm giá không hợp lệ");
            }
        },

        printCart() {

            console.log(
                "┌──────────────────────────────────────────────────────────────┐"
            );

            console.log(
                "│ # │ Sản phẩm      │ SL │ Đơn giá     │ Tổng                  │"
            );

            console.log(
                "├──────────────────────────────────────────────────────────────┤"
            );

            items.forEach((item, index) => {

                const total =
                    item.price * item.quantity;

                console.log(

                    `│ ${String(index + 1).padEnd(1)} ` +
                    `│ ${item.name.padEnd(14)} ` +
                    `│ ${String(item.quantity).padEnd(2)} ` +
                    `│ ${item.price.toLocaleString("vi-VN").padStart(12)} ` +
                    `│ ${total.toLocaleString("vi-VN").padStart(16)} │`
                );
            });

            console.log(
                "├──────────────────────────────────────────────────────────────┤"
            );

            console.log(

                `│ Tổng cộng: ${this.getTotal()
                    .toLocaleString("vi-VN")
                    .padStart(42)}đ │`
            );

            console.log(
                "└──────────────────────────────────────────────────────────────┘"
            );
        },

        getItemCount() {

            return items.reduce(

                (total, item) =>

                    total + item.quantity,

                0
            );
        },

        clearCart() {

            items = [];

            discount = {
                type: null,
                value: 0
            };
        }
    };
}

const cart = createCart();

cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);

cart.addItem(
    {
        id: 3,
        name: "AirPods Pro",
        price: 6990000
    },
    2
);

cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);

console.log("=== CART ===");

cart.printCart();

console.log("\n=== APPLY SALE10 ===");

cart.applyDiscount("SALE10");

cart.printCart();

console.log(
    "\nSố SP:",
    cart.getItemCount()
);

cart.removeItem(3);

console.log(
    "\nSau xóa:",
    cart.getItemCount()
);

cart.updateQuantity(1, 5);

console.log("\n=== UPDATE QUANTITY ===");

cart.printCart();

cart.clearCart();

console.log("\n=== CLEAR CART ===");

cart.printCart();