// Remove unnecessary headers
delete $request.headers["Authorization"];
delete $request.headers["X-RevenueCat-Token"];
$done({ headers: $request.headers });