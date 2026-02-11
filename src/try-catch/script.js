const a = 10, b = 0;

const errorHandle = () => {
    const a = 10, b = 0;

    if (b === 0) {
        throw new Error("Không thể chia cho 0.");
    }

    return a/b;
}

try {
    errorHandle();
} catch (error) {
    console.log("Có lỗi xảy ra.", error);
} finally {
    console.log("Hoàn thành.");
}