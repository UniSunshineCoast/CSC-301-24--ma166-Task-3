CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    category VARCHAR(100),
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, description, price, category, image_url)
VALUES
    ('Men''s Slim Fit T-Shirt', 'Comfortable and stylish slim fit t-shirt for men', 19.99, 'Clothing', 'https://m.media-amazon.com/images/I/71wBlNyW6zL._AC_SY879_.jpg'),
    ('Women''s Skinny Jeans', 'High-quality skinny jeans for women, available in multiple sizes', 39.99, 'Clothing', 'https://m.media-amazon.com/images/I/71jSIqC-65L._AC_SX569_.jpg'),
    ('Unisex Hooded Sweatshirt', 'Warm and cozy hooded sweatshirt for all genders', 29.99, 'Clothing', 'https://m.media-amazon.com/images/I/61Ee6JHDoIL._AC_SX425_.jpg');
