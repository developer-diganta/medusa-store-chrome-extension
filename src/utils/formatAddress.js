function formatAddress(address) {
    return `${address.first_name+" "+address.last_name}, ${address.address_1}, ${address.address_2}, ${address.city}, ${address.province}, ${address.country_code.toUpperCase()}, ${address.postal_code}, ${address.phone}`;
}

export default formatAddress