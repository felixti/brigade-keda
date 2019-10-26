const { events, Job } = require("brigadier");

events.on("push", async () => {
    var compileStep = new Job("compile", "mcr.microsoft.com/dotnet/core/sdk:3.0")
    // var testStep = new Job("test", "example/tester:latest")
    // var tagStep = new Job("tag:, "example/releasetagger:latest")
    // We could continue on creating the remaining steps
  
    await compileStep.run()
    // await testStep.run()
    // await tagStep.run()
    // We could continue running the remaining steps
  });