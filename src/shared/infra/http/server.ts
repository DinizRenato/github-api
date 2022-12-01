
import { app } from ".";

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
})
