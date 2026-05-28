export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      company,
      website,
      businessType,
      automationGoal,
      services,
      budget,
      urgency,
    } = body || {};

    if (!fullName || !email || !automationGoal) {
      return Response.json(
        {
          error:
            "Missing required fields: fullName, email, and automationGoal are required.",
        },
        { status: 400 },
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    // In a production app this would persist to a DB / forward to CRM.
    // For now we just acknowledge receipt.
    const payload = {
      fullName,
      email,
      company: company || null,
      website: website || null,
      businessType: businessType || null,
      automationGoal,
      services: Array.isArray(services) ? services : [],
      budget: budget || null,
      urgency: urgency || null,
      receivedAt: new Date().toISOString(),
    };

    console.log("[NeuralForge AI] New AI request received:", payload);

    return Response.json({
      success: true,
      message:
        "Your request has been received. NeuralForge AI will contact you soon.",
    });
  } catch (err) {
    console.error("[NeuralForge AI] /api/ai-request error:", err);
    return Response.json(
      { error: "Could not submit your request. Please try again." },
      { status: 500 },
    );
  }
}
