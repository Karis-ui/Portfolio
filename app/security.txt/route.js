export async function GET() {
    const content = `Contact : mailto: kariukic547@gmail.com
                Contact : https://linkedin.com/in/Kariuki-ui
                Expires: 2028-01-01T00:00:00.000Z
                Acknowledgement: https://github.com/Karis-ui
                Preferred-Languages: en,ta
                Canonical: https://karis-ui.vercel.app/security.txt`;
    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}