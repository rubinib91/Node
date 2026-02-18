export const responseControl = (req, res) => {
    console.log(req.body)

    if (req.body) {
    
        res.status(201).json({ message: "Resource created successfully!" })
    } else {
        res.status(400).json({ message: "Request body is empty" })
    }
}
