// Locket Gold Response Modifier
let obj = JSON.parse($response.body);

// Giả lập trạng thái premium hoặc gold
if (obj.subscriber) {
  obj.subscriber.entitlements = {
    "gold": {
      "expires_date": "2099-12-31T23:59:59Z",
      "product_identifier": "locket_gold_subscription",
      "purchase_date": "2024-01-01T00:00:00Z"
    }
  };
  obj.subscriber.original_purchase_date = "2024-01-01T00:00:00Z";
}

$done({ body: JSON.stringify(obj) });
