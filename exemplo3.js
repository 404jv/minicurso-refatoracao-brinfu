function generateReport(startDate, endDate, includeCharts, includeTables, format, userId) {
  console.log("Gerando relatório de", startDate, "até", endDate);
  console.log("Format:", format, "User:", userId);
  if (includeCharts) console.log("Incluindo gráficos");
  if (includeTables) console.log("Incluindo tabelas");
}

generateReport("2025-01-01", "2025-01-31", true, false, "pdf", 42);

// refatoração (Introduce Parameter Object pg. 168)
